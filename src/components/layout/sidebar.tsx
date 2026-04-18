import { Button, buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { navBarLinkList } from "@/config/navbarLinks";
import { NavbarLink } from "@/types/navbarLinks.types";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function Sidebar() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild className="w-10 h-10">
        <Button size="lg" variant="secondary" className="rounded-sm">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="z-101 bg-background">
        <DrawerHeader className="flex">
          <DrawerTitle className="text-2xl flex items-center justify-between">
            <DrawerClose asChild>
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <span>Trushita</span>
              </Link>
            </DrawerClose>
            <DrawerClose asChild>
              <Button variant="outline" className="rounded-sm w-10 h-10">
                <X />
              </Button>
            </DrawerClose>
          </DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col gap-2 px-4 py-6">
          {navBarLinkList.map((item: NavbarLink) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`${buttonVariants({variant: 'link'})} group flex items-center justify-start gap-4 px-4 py-3 rounded-lg text-base font-medium text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground`}
              >
                {Icon && <Icon className="w-5 h-5 shrink-0" />}
                <span className="group-hover:translate-x-1 inline-block w-full text-lg text-left transition-transform duration-200">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
