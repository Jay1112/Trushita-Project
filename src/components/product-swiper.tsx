"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ProductItem, ProductList } from "@/types/product.types";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

type ProductSwiperProps = {
  productList: ProductList;
};

export function ProductSwiper({ productList }: ProductSwiperProps) {
  return (
    <div className="w-full">
      <div
        className="
          flex gap-4 px-2 py-4 overflow-x-auto scroll-smooth
        "
      >
        {productList.map((product: ProductItem) => (
          <div key={product.id} className="w-full flex-shrink-0">
            <Card className="rounded-sm max-w-full h-full">
              <CardContent className="flex flex-col justify-between p-4">
                <Image
                  width={100}
                  height={100}
                  src={product.imageSrc}
                  alt={product.description}
                  className="w-full rounded-md aspect-square mb-4"
                />
                <div className="mb-4 w-full">
                  <h3 className="text-lg">{product.name}</h3>
                  <h4 className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </h4>
                  <p className="text-lg font-medium mt-1.5">₹ {product.price}</p>
                </div>

                <Button variant="outline" className="w-full h-14 text-xl">
                  <ShoppingCart className="size-6" />
                  <span className="inline-block ml-2">Add to cart</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
