import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { Dialog } from "./Dialog";

type Props = { onShare: (message: string) => void };
const money = (number: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(number);

export function PropertySearch({ onShare }: Props) {
  const [summary, setSummary] = useState("");
  const [open, setOpen] = useState(false);
  const maxInput = useRef<HTMLInputElement>(null);
  function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const min = Number(data.get("min"));
    const max = Number(data.get("max"));
    if (min && max && min > max) {
      maxInput.current?.setCustomValidity(
        "Maximum price must be at least the minimum price.",
      );
      maxInput.current?.reportValidity();
      return;
    }
    setSummary(
      [
        data.get("location"),
        data.get("type") || "Any property type",
        data.get("bedrooms")
          ? `${data.get("bedrooms")} bedrooms`
          : "Any bedrooms",
        data.get("baths") ? `${data.get("baths")} baths` : "Any baths",
        `${min ? money(min) : "No minimum"} – ${max ? money(max) : "no maximum"}`,
        data.get("sort"),
      ].join(" · "),
    );
    setOpen(true);
  }
  return (
    <section className="search-section section" id="listings">
      <div className="wrap">
        <div className="center-heading">
          <p className="eyebrow">YOUR NEXT CHAPTER</p>
          <h2>
            Find your <em>dream home.</em>
          </h2>
          <p>Start with what matters to you.</p>
        </div>
        <form
          id="search-form"
          className="search-form"
          onSubmit={search}
          onInput={() => maxInput.current?.setCustomValidity("")}
        >
          <h3>Search listings</h3>
          <div className="search-fields">
            <label>
              Location
              <select name="location">
                <option>Pahrump</option>
                <option>Las Vegas</option>
                <option>Henderson</option>
                <option>Boulder City</option>
              </select>
            </label>
            <label>
              Property type
              <select name="type">
                <option value="">Any type</option>
                <option>Single family</option>
                <option>Condo / townhome</option>
                <option>Land</option>
                <option>Commercial</option>
              </select>
            </label>
            <label>
              Bedrooms
              <select name="bedrooms">
                <option value="">Any</option>
                {["1+", "2+", "3+", "4+", "5+"].map((value) => (
                  <option key={value}>{value}</option>
                ))}
              </select>
            </label>
            <label>
              Baths
              <select name="baths">
                <option value="">Any</option>
                {["1+", "2+", "3+", "4+"].map((value) => (
                  <option key={value}>{value}</option>
                ))}
              </select>
            </label>
            <label>
              Min price
              <input
                name="min"
                type="number"
                min="0"
                step="1000"
                placeholder="$ No minimum"
                inputMode="numeric"
              />
            </label>
            <label>
              Max price
              <input
                ref={maxInput}
                name="max"
                type="number"
                min="0"
                step="1000"
                placeholder="$ No maximum"
                inputMode="numeric"
              />
            </label>
            <label>
              Sort by
              <select name="sort">
                <option>Newest first</option>
                <option>Price: low to high</option>
                <option>Price: high to low</option>
              </select>
            </label>
            <button className="button dark" type="submit">
              Search now <span aria-hidden="true">↗</span>
            </button>
          </div>
          <p className="form-note">
            For live availability, browse Marci’s current listings. You can also
            share your preferences with the team.
          </p>
        </form>
        <Dialog
          id="search-dialog"
          label="Your home search"
          open={open}
          onClose={() => setOpen(false)}
        >
          <button
            className="search-close"
            aria-label="Close search"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
          <p className="eyebrow">YOUR HOME SEARCH</p>
          <h2>
            Let’s find <em>your place.</em>
          </h2>
          <p id="search-summary">{summary}</p>
          <p>
            Live listings are available on Marci’s original website. These
            preferences can also be added to your inquiry.
          </p>
          <a
            className="button dark"
            href="https://marcimetzger.com/listings"
            target="_blank"
            rel="noopener noreferrer"
          >
            Browse live listings ↗
          </a>
          <button
            className="text-link"
            onClick={() => {
              setOpen(false);
              onShare(
                `Hi Marci, I’m looking for a home with these preferences:\n\n${summary}\n\nI’d love to learn more about available properties.`,
              );
            }}
          >
            Add preferences to my message ↗
          </button>
        </Dialog>
      </div>
    </section>
  );
}
