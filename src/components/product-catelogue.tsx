import { ProductSwiper } from "@/components/product-swiper";
import { ProductList } from "@/types/product.types";
import Image from "next/image";

const products: ProductList = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: 48,
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
    description:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: 35,
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg",
    description:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: 89,
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg",
    description:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: 35,
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
    description:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Focus Card Tray",
    href: "#",
    price: 64,
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-05.jpg",
    description: "Paper card sitting upright in walnut card holder on desk.",
  },
  {
    id: 6,
    name: "Focus Multi-Pack",
    href: "#",
    price: 39,
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-06.jpg",
    description:
      "Stack of 3 small drab green cardboard paper card refill boxes with white text.",
  },
  {
    id: 7,
    name: "Brass Scissors",
    href: "#",
    price: 50,
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-07.jpg",
    description:
      "Brass scissors with geometric design, black steel finger holes, and included upright brass stand.",
  },
  {
    id: 8,
    name: "Focus Carry Pouch",
    href: "#",
    price: 32,
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-08.jpg",
    description:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
];

function ProductCatelogue() {
  return (
    <section className="w-full py-8 md:py-16 bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-0 max-w-3xl">
        <h2 className="text-3xl text-left md:text-4xl font-bold tracking-tight mb-6">
          Products
        </h2>
        <div className="hidden md:grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <Image
                width={100}
                height={100}
                alt={product.description}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
              />
              <h3 className="mt-4 text-sm">{product.name}</h3>
              <p className="mt-1 text-lg font-medium">{product.price}</p>
            </a>
          ))}
        </div>
        <div className="block md:hidden">
          <ProductSwiper productList={products} />
        </div>
        <div className="h-100"></div>
      </div>
    </section>
  );
}

export default ProductCatelogue;
