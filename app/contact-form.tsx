"use client";

import { useActionState } from "react";
import { sendInquiry, type InquiryState } from "./actions";

const initialState: InquiryState = { ok: false, message: "" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendInquiry, initialState);

  return (
    <form className="form" action={formAction} aria-label="Project inquiry form">
      {/* Honeypot: hidden from users, catches bots. */}
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hp-field"
      />

      <label>
        Name
        <input type="text" name="name" autoComplete="name" placeholder="Jane Doe" required />
      </label>
      <label>
        Work email
        <input type="email" name="email" autoComplete="email" placeholder="jane@company.com" required />
      </label>
      <label>
        Company
        <input type="text" name="company" autoComplete="organization" placeholder="Company Inc." />
      </label>
      <label>
        Project brief
        <textarea name="message" rows={4} placeholder="What are you trying to build or improve?" required />
      </label>

      <button className="btn btn-primary" type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send inquiry"}
        {!pending && <span className="arrow" aria-hidden="true">→</span>}
      </button>

      {state.message && (
        <p
          className={`form-status ${state.ok ? "is-ok" : "is-error"}`}
          role="status"
          aria-live="polite"
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
