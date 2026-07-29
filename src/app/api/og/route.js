import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "SKUCHEEZ COUTURE";
    const subtitle = searchParams.get("subtitle") || "Luxury West African Menswear · Warri, Nigeria";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#050505",
            backgroundImage: "radial-gradient(circle at center, #1e1b0e 0%, #050505 75%)",
            color: "#ffffff",
            padding: "40px 80px",
            border: "10px solid #d4af37",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: "0.35em",
              color: "#d4af37",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            {subtitle}
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: "bold",
              textAlign: "center",
              background: "linear-gradient(135deg, #fff2aa 0%, #f5d061 50%, #d4af37 100%)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: 28,
              lineHeight: 1.1,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 24,
              color: "rgba(255, 255, 255, 0.8)",
              textAlign: "center",
              maxWidth: "850px",
              fontStyle: "italic",
            }}
          >
            “Handcrafted Agbada, Ankara Suits & Kaftans for Gentlemen of Culture — Proudly Made in Warri”
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    return new Response(`Failed to generate the OG image`, {
      status: 500,
    });
  }
}
