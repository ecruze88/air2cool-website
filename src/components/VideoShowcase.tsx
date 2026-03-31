import VideoCard from "./VideoCard";

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
  orientation = "portrait",
  sectionClassName = "py-10 md:py-16 bg-white",
}: VideoShowcaseProps) {
  return (
    <section className={sectionClassName}>
      <div className="max-w-sm mx-auto px-4 md:px-6">
        <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-6 text-center">
          {title}
        </h2>
        <VideoCard src={src} caption={caption} orientation={orientation} />
      </div>
    </section>
  );
}
