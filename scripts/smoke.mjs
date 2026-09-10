import assert from "node:assert/strict";
import { readFile, readdir, access } from "node:fs/promises";
import { createServer } from "vite";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

const server = await createServer({ server: { middlewareMode: true } });
try {
  const { default: App } = await server.ssrLoadModule("/src/App.tsx");
  const html = renderToStaticMarkup(createElement(App));
  assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1, "one primary heading");
  const ids = [...html.matchAll(/ id="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length, "unique element IDs");
  for (const [, id] of html.matchAll(/href="#([^"]+)"/g))
    assert(ids.includes(id), `anchor ${id}`);
  for (const [, file] of html.matchAll(/src="(assets\/[^"]+)"/g))
    await access(`public/${file}`);
  assert.equal(
    (await readdir("public/assets")).length,
    21,
    "all original images retained",
  );
  for (const text of [
    "Pahrump",
    "Search listings",
    "Send a message",
    "28.5M",
    "Office hours",
  ])
    assert(html.includes(text), text);
  const built = await readFile("dist/index.html", "utf8");
  for (const [, file] of built.matchAll(/(?:src|href)="\.\/(assets\/[^"]+)"/g))
    await access(`dist/${file}`);
  assert(built.includes('type="module"'), "Vite module entry");
  console.log(
    "PASS: React rendering, content, anchors, 21 original images, and production bundle references.",
  );
} finally {
  await server.close();
}
