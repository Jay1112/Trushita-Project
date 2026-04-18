import BrandIntro from "@/components/brand-introduction";
import { HomeSwiper } from "@/components/home-swiper";
import ProductCatelogue from "@/components/product-catelogue";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="">
      <div className="container flex items-center justify-center py-0 md:py-6">
        <HomeSwiper />
      </div>
      <div className="container">
        <BrandIntro/>
        <ProductCatelogue/>
      </div>
    </div>
  )
}