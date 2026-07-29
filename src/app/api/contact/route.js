import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const payload = {
      name,
      email,
      company: company || "",
      message: message || "",
      receivedAt: new Date().toISOString(),
    };

    console.log("[Contact Form]", JSON.stringify(payload));

    return NextResponse.json({ success: true, message: "Message received" });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}