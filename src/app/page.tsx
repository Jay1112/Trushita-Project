import { HomeSwiper } from "@/components/home-swiper";
import ProductCatelogue from "@/components/product-catelogue";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="">
      <div className="container flex items-center justify-center py-4">
        <HomeSwiper />
      </div>
      <Separator className="container my-4"/>
      <div className="container ">
        <ProductCatelogue/>
      </div>
    </div>
  )
}