interface VideoCardProps {
  src: string;
  caption?: string;
  orientation?: "portrait" | "landscape";
  className?: string;
}

export default function VideoCard({
  src,
  caption,
  orientation = "portrait",
  className = "",
}: VideoCardProps) {
  const isPortrait = orientation === "portrait";

  return (
    <figure className={`flex flex-col gap-3 ${className}`}>
      <div
        className="relative bg-gray-950 rounded-2xl shadow-2xl overflow-hidden mx-auto w-full"
        style={isPortrait ? { aspectRatio: "9/16", maxWidth: "300px" } : { aspectRatio: "16/9" }}
      >
        {/* Subtle dot texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        {/* Side fades for portrait */}
        {isPortrait && (
          <>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-gray-950/70 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-gray-950/70 to-transparent z-10" />
          </>
        )}
        <video
          controls
          controlsList="novolume"
          muted
          preload="none"
          playsInline
          className="relative z-0 w-full h-full block"
          style={{ objectFit: "contain" }}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
      {caption && (
        <figcaption className="text-sm font-medium text-gray-500 text-center leading-snug px-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
