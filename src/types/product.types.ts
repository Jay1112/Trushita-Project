export type ProductItem = {
    id: number;
    name: string;
    href: string;
    price: number;
    imageSrc: string;
    description: string;
}

export type ProductList = ProductItem[];