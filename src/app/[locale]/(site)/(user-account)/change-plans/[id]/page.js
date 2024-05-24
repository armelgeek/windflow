import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {redirect} from "next/navigation";
import Plans from "@/components/core/pricing";

export default async function Page() {
    const session = await getServerSession(authOptions);
    const subscription = session.user?.subscriptions;
    console.log('subscription',subscription)
    if (!session) {
        redirect("/");
    }
    return (
        <>
            <h3>Change Plan</h3>

        </>
    );
}
