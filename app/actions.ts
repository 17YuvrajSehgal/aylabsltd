"use server";

import { Resend } from "resend";

export type InquiryState = {
  ok: boolean;
  message: string;
};

// Where inquiries are delivered. Update once a domain is verified in Resend.
const TO_EMAIL = "aylabsltd@gmail.com";
const FROM_EMAIL = "AY LABS LTD <onboarding@resend.dev>";

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function sendInquiry(
  _prevState: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  // Honeypot — real users never fill this hidden field; bots do.
  if ((formData.get("botcheck") as string)?.trim()) {
    return { ok: true, message: "Thanks — we'll be in touch shortly." };
  }

  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const company = (formData.get("company") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  if (!name || !email || !message) {
    return { ok: false, message: "Please fill in your name, email, and a short brief." };
  }
  if (!isEmail(email)) {
    return { ok: false, message: "That email address doesn't look right — please check it." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — cannot send inquiry email.");
    return {
      ok: false,
      message: "Sending isn't configured yet. Please email us directly at aylabsltd@gmail.com.",
    };
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` · ${company}` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "—"}`,
        "",
        "Project brief:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        ok: false,
        message: "Something went wrong sending your message. Please try again or email us directly.",
      };
    }

    return { ok: true, message: "Thanks — your message is on its way. We'll reply within one business day." };
  } catch (err) {
    console.error("Failed to send inquiry:", err);
    return {
      ok: false,
      message: "Something went wrong sending your message. Please try again or email us directly.",
    };
  }
}
