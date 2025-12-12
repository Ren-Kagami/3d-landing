import { NextResponse } from "next/server";

// Simple regex checks
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;

// In-memory anti-spam (basic rate limiting by IP)
const requestLog = new Map<string, number>();
const SPAM_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";


    const now = Date.now();
    const lastReq = requestLog.get(ip) || 0;
    if (now - lastReq < SPAM_WINDOW_MS) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please wait a minute." },
        { status: 429 }
      );
    }
    requestLog.set(ip, now);

    const body = await req.json();
    const { name, email, phone } = body;

    // Field validation
    if (!name || typeof name !== "string" || name.length < 2) {
      return NextResponse.json({ success: false, error: "Invalid name" }, { status: 400 });
    }

    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: "Invalid email" }, { status: 400 });
    }

    if (phone && !phoneRegex.test(phone)) {
      return NextResponse.json({ success: false, error: "Invalid phone" }, { status: 400 });
    }

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error("Missing Telegram credentials in environment");
      return NextResponse.json(
        { success: false, error: "Server misconfigured (missing Telegram credentials)" },
        { status: 500 }
      );
    }
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const message = `
🔔 Новая заявка с сайта!

👤 Имя: ${name}
📧 Email: ${email}
📱 Телефон: ${phone || "Не указан"}
⏰ Дата: ${new Date().toLocaleString("ru-RU")}
    `.trim();

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        "Telegram API error",
        JSON.stringify({ status: response.status, body: errorText }).slice(0, 500)
      );
      throw new Error("Failed to send message to Telegram");
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
