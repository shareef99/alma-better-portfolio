"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="py-8 flex justify-between items-center">
      <span className="text-3xl italic">Shareef</span>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              className={cn("text-lg", pathname === "/" && "font-bold")}
              href="/"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              className={cn("text-lg", pathname === "/about" && "font-bold")}
              href="/about"
            >
              About
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              className="text-lg"
              href="/shareef-resume.pdf"
              download
            >
              Resume
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}
