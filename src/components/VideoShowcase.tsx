interface VideoShowcaseProps {
  title: string;
  src: string;
  caption?: string;
  orientation?: "portrait" | "landscape";
  sectionClassName?: string;
}

export default function VideoShowcase({
  title,
  src,
  caption,
  sectionClassName = "py-10 md:py-16 bg-white",
}: VideoShowcaseProps) {
  return (
    <section className={sectionClassName}>
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 text-center">
          {title}
        </h2>
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto 2rem auto",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "cover",
            }}
          >
            <source src={src} type="video/mp4" />
          </video>
          {caption && (
            <div
              style={{
                padding: "12px 16px",
                background: "#f8f9fa",
                fontSize: "14px",
                color: "#555",
                textAlign: "center",
              }}
            >
              {caption}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
