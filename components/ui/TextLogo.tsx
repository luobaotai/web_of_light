"use client";

import { navItems } from "@/data";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const TextLogo = () => {
    return (
        <Link href="/" className={cn(
            "relative dark:text-neutral-50 items-start  flex space-x-1 px-10 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
          )}>
            <img src="/logo.png" className="md:w-24 sm:w-8 xs:w-2"/>

        </Link>
    )
}

