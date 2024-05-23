import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {CreditCard, DoorClosed, Home, LucideLogOut, Settings} from "lucide-react";

import Link from "next/link";

export const navItems = [
    { name: "Home", href: "account", icon: Home },
    { name: "Settings", href: "settings", icon: Settings },
    { name: "Billing", href: "billing", icon: CreditCard },
];

function UserNav({ name, email,image}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10 rounded-full">
                        <AvatarImage src={image} alt="" />
                        <AvatarFallback>Jan</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{name}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {navItems.map((item, index) => (
                        <DropdownMenuItem asChild key={index}>
                            <Link
                                href={item.href}
                                className="w-full flex justify-between items-center"
                            >
                                {item.name}
                            </Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />

                <DropdownMenuItem
                    className="w-full flex justify-between items-center"
                    asChild
                >
                    <LucideLogOut>
                        Logout
                        <span>
                          <DoorClosed className="w-4 h-4" />
                        </span>
                    </LucideLogOut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
export default UserNav;
