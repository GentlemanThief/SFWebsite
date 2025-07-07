import Image from "next/image";
import FadeIn from "../../components/FadeIn";

export default function NewsCard({ article }) {
  const { title, href, image, alt, description, className } = article;

  return (
    <div className="bg-base-100">
      <a href={href} className="relative block w-full h-56 mb-3 group overflow-hidden">
        <Image
          src={image}
          className="object-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
      </a>
      <h2 className="text-lg font-black text-center">
        <a href={href} className={className}>
          {title}
        </a>
      </h2>
      <FadeIn>
        <p className="text-sm font-normal text-base-content p-4">
          {description}
        </p>
      </FadeIn>
    </div>
  );
}
