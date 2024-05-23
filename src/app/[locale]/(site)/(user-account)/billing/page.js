import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import UserSubscription from "@/components/core/auth/Subscription";
import {syne} from "@/lib/utils/fonts";

export async function generateMetadata() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return null;
    }
    return {
        metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
        title: `Billing | ${session.user.name}`,
    };
}

export default async function AccountPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/");
    }

    return (
        <>
            <h3 className={`font-bold text-2xl mb-5 ${syne.className}`}>Billing</h3>
            <UserSubscription/>

        </>
    );
}
