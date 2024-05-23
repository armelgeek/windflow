"use client";

import { cn } from "@/lib/utils";
import { CreditCard, Home, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./UserNav";
import {syne} from "@/lib/utils/fonts";

export function DashboardNav() {
    const pathname = usePathname();

    return (
        <nav className="grid items-start gap-2">
            {navItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  <span
                      className={cn(
                          "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",pathname === item.href ? "bg-accent" : "bg-transparent",syne.className)}>
                      {item.name}
                  </span>
                </Link>
                ))}
        </nav>
    );
}
