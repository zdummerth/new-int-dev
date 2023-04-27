import SupabaseImage from "./SupabaseImage";
import Link from "next/link";
interface FeatureProps {
  title: string;
  description: string;
  image: string;
  imgAlt: string;
  ctaText: string;
  ctaLink: string;
}
export default function FeaturesSection({
  features,
  headline,
}: {
  features: FeatureProps[];
  headline: string;
}) {
  return (
    <section className="max-w-[1024px]">
      <h2 className="text-center font-bold text-4xl mt-10">{headline}</h2>
      <div className="max-w-[1024px] p-10 flex flex-col md:grid md:grid-cols-3 gap-4">
        {features.map((feature: FeatureProps, index: number) => (
          <div
            key={feature.title + index}
            className="flex flex-col items-center rounded-xl overflow-hidden h-full"
          >
            <SupabaseImage
              src={feature.image}
              alt={feature.imgAlt}
              width={500}
              height={500}
              className=""
            />
            <div className="max-w-[500px] h-full flex flex-col justify-between p-5">
              <div className="flex-1">
                <h2 className="text-3xl font-bold my-5 text-shadow-dark-2xl">
                  {feature.title}
                </h2>
                <p className="text-xl">{feature.description}</p>
              </div>
              <Link
                href={feature.ctaLink}
                className="text-white text-center hover:bg-white hover:text-black text-xl font-semibold px-12 py-3 rounded-xl mt-5 inline-block border border-white transition-all"
              >
                {feature.ctaText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
