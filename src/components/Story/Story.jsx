import Image from "next/image";

export default function Story() {
  return (
    <section id="story" className="storyContainer">
      <div className="storyBgWrapper">
        <Image
          src="/about1.webp"
          alt="SKUCHEEZ COUTURE Agbada Collection Showcase - 5 Bronze Mannequins"
          fill
          priority
          className="storyBgImg"
        />
        <div className="storyOverlayGradient" />
      </div>

      <div className="storyContent">
        <span className="storyCategoryTag">THE COUTURE STORY</span>

        <h2 className="storyHeading">
          Where heritage meets <span className="storyItalic">couture.</span>
        </h2>

        <blockquote className="storyQuote">
          &ldquo;An agbada is not merely draped; it is a canvas of identity.&rdquo;
        </blockquote>

        <p className="storyDescription">
          Rooted in West African craftsmanship, every garment reflects timeless
          elegance and architectural precision. Our master artisans dedicate
          over eighty hours to each piece, transforming premium fabrics into
          wearable works of art through meticulous hand-finished detailing.
        </p>
      </div>
    </section>
  );
}