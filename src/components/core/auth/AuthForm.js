"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
export const AuthForm = ({ variant }) => {
    let primaryMessage = "create an account";
    let secondaryMessage = "sign up";
    if (variant === "signin") {
        primaryMessage = "sign in";
        secondaryMessage = "sign in";
    }

    return (
        <div className="flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight  capitalize">
                    {primaryMessage}
                </h1>
                <p className="text-sm text-muted-foregroun ">
                    Enter your email below to {primaryMessage}
                </p>
            </div>
            <div className="grid gap-6">
                <Button
                    variant="secondary"
                    onClick={() => signIn("github", { callbackUrl: "/" })}
                    className="capitalize bg-indigo-700 hover:bg-indigo-800 text-white"
                >
                    <GithubIcon className="h-4 mr-1 text-white" /> {secondaryMessage} with Github
                </Button>
                <p className="px-8 text-xs text-center text-muted-foreground">
                    By clicking continue, you agree to our{" "}
                    <Link
                        className="underline underline-offset-4 hover:text-primary"
                        href="/terms"
                    >
                        Terms
                    </Link>{" "}
                    and{" "}
                    <Link
                        className="underline underline-offset-4 hover:text-primary"
                        href="/privacy"
                    >
                        Privacy Policy
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default AuthForm;
