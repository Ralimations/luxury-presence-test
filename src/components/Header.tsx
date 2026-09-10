import { useRef, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <a className="brand" href="#home" aria-label="Marci Metzger home">
        <img
          src="assets/logo.png"
          alt="Marci Metzger"
          width="214"
          height="67"
        />
      </a>
      <button
        className="menu-toggle"
        ref={toggle}
        aria-expanded={open}
        aria-controls="navigation"
        onClick={() => setOpen(!open)}
      >
        Menu <span aria-hidden="true">☰</span>
      </button>
      <nav
        id="navigation"
        className={open ? "open" : ""}
        aria-label="Main navigation"
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a")) setOpen(false);
        }}
      >
        <a href="#about">Meet Marci</a>
        <a href="#results">Our approach</a>
        <a href="#listings">Find a home</a>
        <a href="#gallery">Gallery</a>
        <a className="nav-contact" href="#contact">
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
