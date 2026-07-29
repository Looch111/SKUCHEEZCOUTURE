import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const host = request.headers.get("host") || "skucheezcouture.vercel.app";
    const protocol = host.includes("localhost") ? "http" : "https";
    const logoUrl = `${protocol}://${host}/logo.png`;

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
            backgroundImage: "radial-gradient(ellipse at center, #1b170a 0%, #050505 80%)",
            color: "#ffffff",
            padding: "40px 60px",
            border: "8px solid #d4af37",
            boxSizing: "border-box",
          }}
        >
          {/* Main Logo Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoUrl}
            alt="SKUCHEEZ COUTURE Logo"
            width="680"
            height="203"
            style={{
              objectFit: "contain",
              marginBottom: "24px",
            }}
          />

          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.32em",
              color: "#f5d061",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Luxury West African Menswear · Warri, Nigeria
          </div>

          <div
            style={{
              fontSize: 20,
              color: "rgba(255, 255, 255, 0.75)",
              textAlign: "center",
              maxWidth: "850px",
              fontStyle: "italic",
            }}
          >
            “Handcrafted Agbada, Ankara Suits & Kaftans for Gentlemen of Culture”
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
