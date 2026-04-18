"use client";

import { FormEvent, useState } from "react";

type FormStatus = {
  type: "idle" | "success" | "error";
  message: string;
};

const initialStatus: FormStatus = {
  type: "idle",
  message: "",
};

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>(initialStatus);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);
    setStatus(initialStatus);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        success: boolean;
        message: string;
      };

      if (!response.ok || !result.success) {
        setStatus({
          type: "error",
          message: result.message || "Unable to send message right now.",
        });
        return;
      }

      form.reset();
      setStatus({
        type: "success",
        message: result.message || "Message sent successfully.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="contact-name" className="sr-only">
        Name
      </label>
      <input id="contact-name" name="name" placeholder="Your name" required minLength={2} />

      <label htmlFor="contact-email" className="sr-only">
        Email
      </label>
      <input id="contact-email" name="email" type="email" placeholder="Your email" required />

      <label htmlFor="contact-message" className="sr-only">
        Message
      </label>
      <textarea
        id="contact-message"
        name="message"
        placeholder="Your message"
        rows={4}
        required
        minLength={10}
      />
      <button type="submit" disabled={submitting}>
        {submitting ? "Sending..." : "Send Message"}
      </button>
      {status.type !== "idle" ? (
        <p className={`form-status ${status.type}`} role="status" aria-live="polite">
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
