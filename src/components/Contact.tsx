import { useState } from "react";
import type { FormEvent, RefObject } from "react";
import { ContactDetails } from "./Sections";

type Props = {
  message: string;
  onMessageChange: (message: string) => void;
  nameRef: RefObject<HTMLInputElement | null>;
};

export function Contact({ message, onMessageChange, nameRef }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [prepared, setPrepared] = useState("");
  const [copyState, setCopyState] = useState<"ready" | "copied" | "manual">(
    "ready",
  );
  const currentMessage = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  const isPrepared = prepared !== "" && prepared === currentMessage;
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPrepared(currentMessage);
    setCopyState("ready");
  }
  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(prepared);
      setCopyState("copied");
    } catch {
      setCopyState("manual");
    }
  }
  return (
    <section className="contact section wrap" id="contact">
      <ContactDetails />
      <div className="contact-card">
        <p className="eyebrow">START A CONVERSATION</p>
        <h3>Send a message</h3>
        <form
          id="contact-form"
          onSubmit={prepare}
          onChange={() => setPrepared("")}
        >
          <label>
            Name
            <input
              ref={nameRef}
              name="name"
              autoComplete="name"
              placeholder="Your name"
              required
              maxLength={100}
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label>
            Email <span aria-hidden="true">*</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              maxLength={200}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us a little about your next move…"
              required
              maxLength={4000}
              value={message}
              onChange={(event) => onMessageChange(event.target.value)}
            />
          </label>
          <p className="form-note">
            Prepare your message here, then copy it and continue to Marci’s
            secure contact form to send.
          </p>
          <button className="button dark" type="submit">
            Prepare message <span aria-hidden="true">↗</span>
          </button>
          <div id="contact-status" role="status">
            {isPrepared && (
              <>
                <p>
                  Your message is ready. Nothing has been sent yet. Copy it,
                  then paste it into the secure form on Marci’s website.
                </p>
                {copyState === "manual" && (
                  <p>
                    Copy this message manually:
                    <br />
                    {prepared}
                  </p>
                )}
                <div className="contact-status-actions">
                  <button type="button" onClick={copyMessage}>
                    {copyState === "copied" ? "Copied" : "Copy message"}
                  </button>
                  <a
                    href="https://marcimetzger.com/#63878283-d93b-46db-8daa-d8cb1389f2ab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open secure contact form ↗
                  </a>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
