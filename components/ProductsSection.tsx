import SupabaseImage from "./SupabaseImage";
import ChevronRight from "./icons/ChevronRight";
import Link from "next/link";
interface ProductProps {
  name: string;
  description: string;
  image: string;
  imgAlt: string;
  price: number;
  link: string;
  linkText: string;
}
export default function ProductsSection({
  products,
  headline,
}: {
  products: ProductProps[];
  headline: string;
}) {
  return (
    <section className="max-w-[1024px]">
      <h2 className="text-center font-bold text-4xl mt-10">{headline}</h2>
      <div className="p-10 flex flex-col md:grid md:grid-cols-6 grid-rows-2 gap-2">
        {products.map((product: ProductProps, index: number) => (
          <div
            key={product.name + index}
            className={`relative flex flex-col items-center rounded-xl overflow-hidden h-full ${
              index === 0 ? "col-span-4 row-span-2" : "col-span-2 row-span-1"
            }`}
          >
            <SupabaseImage
              src={product.image}
              alt={product.imgAlt}
              width={1000}
              height={1000}
              className="hover:scale-125 transition-all"
            />
            <div className="p-3 absolute bottom-0 w-full flex items-center justify-between bg-black/50">
              <div>
                <h2 className="text-2xl font-semibold ">{product.name}</h2>
                <p className="text-xl">${product.price}</p>
              </div>
              <Link href={product.link} className="self-end">
                <ChevronRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
