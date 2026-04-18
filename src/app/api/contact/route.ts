import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizeValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

async function parsePayload(request: Request): Promise<ContactPayload> {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const body = (await request.json()) as Record<string, unknown>;
    return {
      name: normalizeValue(body.name),
      email: normalizeValue(body.email),
      message: normalizeValue(body.message),
    };
  }

  const formData = await request.formData();
  return {
    name: normalizeValue(formData.get("name")),
    email: normalizeValue(formData.get("email")),
    message: normalizeValue(formData.get("message")),
  };
}

export async function POST(request: Request) {
  try {
    const payload = await parsePayload(request);

    if (!payload.name || !payload.email || !payload.message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (payload.message.length < 10) {
      return NextResponse.json(
        { success: false, message: "Message should be at least 10 characters." },
        { status: 400 }
      );
    }

    // Optional webhook for notifications (Discord/Slack/custom endpoint)
    const webhook = process.env.CONTACT_WEBHOOK_URL;
    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: `New contact message from ${payload.name} (${payload.email})\n\n${payload.message}`,
        }),
      });
    }

    return NextResponse.json({
      success: true,
      message: "Message received successfully. I will contact you soon.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while submitting your message.",
      },
      { status: 500 }
    );
  }
}
