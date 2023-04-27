import SupabaseImage from "./SupabaseImage";
import Link from "next/link";
interface HeroProps {
  title: string;
  subtitle: string;
  bgImage: string;
  mobileBgImage: string;
  ctaText: string;
  ctaLink: string;
}
export default function HeroSection({
  title,
  subtitle,
  bgImage,
  mobileBgImage,
  ctaText,
  ctaLink,
}: HeroProps) {
  return (
    <section className="relative w-screen max-w-[1024px]">
      {/* Background Image */}
      <SupabaseImage
        src={bgImage}
        alt="Background Image"
        fill
        sizes="(min-width: 768px) 1024px, 100vw"
        className="hidden md:block object-cover object-bottom"
      />
      <SupabaseImage
        src={mobileBgImage}
        alt="Background Image"
        fill
        sizes="(min-width: 768px) 1024px, 100vw"
        className="md:hidden object-cover object-center"
      />

      {/* Hero Text */}
      <div className="relative z-20 text-white p-20 md:p-40 md:text-right">
        <h1 className="text-6xl font-bold my-10 text-shadow-dark-2xl">
          {title}
        </h1>
        <p className="text-3xl font-semibold text-shadow-dark-2xl">
          {subtitle}
        </p>
        <Link
          href={ctaLink}
          className="bg-gray-100 hover:bg-white text-black text-xl font-semibold px-12 py-3 rounded-xl mt-10 inline-block shadow-md hover:shadow-xl hover:shadow-black shadow-black transition-all"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
