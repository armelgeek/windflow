import { Link } from "@/lib/intl/navigation";
import { Undo2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuthForm from "@/components/core/auth/AuthForm";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  title: "Boilerplate AW - Sign in / Sign up",
  description:
    "Sign in or create an account with the options priovided to get started with Firestarta.dev.",
};

export default function SigninPage() {
  return (
    <div className="container relative flex-col items-center justify-center h-dvh lg:max-w-none lg:px-0">
      
      <div className="flex items-center justify-center h-full p-10">
        <Button asChild className="absolute top-3 right-3" variant="ghost">
          <Link href="/">
            <Undo2 className="w-4 h-4 mr-2" /> Go back
          </Link>
        </Button>
        <AuthForm variant="signin" />
      </div>
    </div>
  );
}
