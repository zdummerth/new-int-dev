import { GetServerSideProps } from "next";
import fs from "fs";
import path from "path";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductsSection from "@/components/ProductsSection";
export default function HomePage({ data }: any) {
  //   console.log(data);
  return (
    <main className="min-h-screen flex flex-col items-center">
      <HeroSection {...data.hero} />
      <ProductsSection
        products={data.products.list}
        headline={data.products.headline}
      />
      <FeaturesSection
        features={data.features.list}
        headline={data.features.headline}
      />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<{ data: any }> = async (
  context: any
) => {
  const { params } = context;
  const { sitename } = params;
  const getJsonFromContentFolder = (sitename: string) => {
    const filePath = path.join(process.cwd(), "content", `${sitename}.json`);

    const json = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return json;
  };

  const data = getJsonFromContentFolder(sitename);

  return {
    props: {
      data,
    },
  };
};
