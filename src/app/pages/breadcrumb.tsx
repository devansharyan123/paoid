"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter
import { ChevronRight } from "lucide-react";

export function Breadcrumb() {
  const pathname = usePathname(); // Get the current path
  const path = pathname.split("/").filter((segment) => segment);

  return (
    <div className="flex items-center gap-2 text-sm p-4 bg-white">
      <Link href="/" className="text-button-blue hover:underline">
        Home
      </Link>
      {path.map((segment, index) => {
        const href = "/" + path.slice(0, index + 1).join("/");
        return (
          <div key={index} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4 text-gray-500" />
            <Link
              href={href}
              className="text-button-blue hover:underline capitalize"
            >
              {segment.replace(/-/g, " ")}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
