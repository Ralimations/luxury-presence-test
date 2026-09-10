import { useRef, useState } from "react";
import { Header } from "./components/Header";
import { Gallery } from "./components/Gallery";
import { PropertySearch } from "./components/PropertySearch";
import { Contact } from "./components/Contact";
import {
  Hero,
  About,
  Results,
  Services,
  ClosingPhoto,
  Affiliations,
  Footer,
} from "./components/Sections";

export default function App() {
  const [message, setMessage] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  function sharePreferences(value: string) {
    setMessage(value);
    // Wait for the modal to close before moving focus to the inquiry form.
    requestAnimationFrame(() => {
      nameRef.current
        ?.closest("section")
        ?.scrollIntoView({
          behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "instant"
            : "smooth",
        });
      nameRef.current?.focus({ preventScroll: true });
    });
  }
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Results />
        <PropertySearch onShare={sharePreferences} />
        <Gallery />
        <Services />
        <Contact
          message={message}
          onMessageChange={setMessage}
          nameRef={nameRef}
        />
        <ClosingPhoto />
        <Affiliations />
      </main>
      <Footer />
    </>
  );
}
