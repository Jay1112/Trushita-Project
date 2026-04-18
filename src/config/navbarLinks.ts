import { NavbarLink } from "@/types/navbarLinks.types";
import { Store, Info, Phone, HelpCircle, ShoppingCart } from "lucide-react";

export const navBarLinkList: NavbarLink[] = [
  {
    name: "Shop",
    path: "/shop/",
    icon: Store,
  },
  {
    name: "About Us",
    path: "/about-us/",
    icon: Info,
  },
  {
    name: "Contact Us",
    path: "/contact-us/",
    icon: Phone,
  },
  {
    name: "FAQs",
    path: "/faqs/",
    icon: HelpCircle,
  },
  {
    name: "My Cart",
    path: "/my-cart/",
    icon: ShoppingCart,
  },
];
