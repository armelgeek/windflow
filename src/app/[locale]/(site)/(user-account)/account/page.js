import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "@/components/core/session/Section";
import UserSubscription from "@/components/core/auth/Subscription";

export async function generateMetadata() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return null;
  }
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
    title: `Account | ${session.user.name}`,
  };
}

export default async function AccountPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <div className="container  py-20">
      
    </div>
  );
}
