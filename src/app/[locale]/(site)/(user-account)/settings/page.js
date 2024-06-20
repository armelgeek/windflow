import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import prisma from "@/lib/prisma";

import { SubmitButton } from "@/components/core/general/SubmitButton";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";
import { syne } from "@/lib/utils/fonts";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

async function getData(userId) {
    noStore();
    const data = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            name: true,
            email: true
        },
    });

    return data;
}

export default async function SettingPage() {
    const session = await getServerSession(authOptions);
    const data = await getData(session?.user?.id);
    async function postData(formData) {
        "use server";
        const name = formData.get("name");
        await prisma.user.update({
            where: {
                id: session?.user?.id,
            },
            data: {
                name: name ?? undefined
            },
        });

        revalidatePath("/");
    }

    return (
        <div className="grid items-start gap-8">
            <div className="flex items-center justify-between px-2">
                <div className="grid gap-1">
                    <h1 className={`text-3xl md:text-4xl ${syne.className}`}>Settings</h1>
                    <p className={`text-lg text-muted-foreground  ${syne.className}`}>Your Profile settings</p>
                </div>
            </div>

            <Card>
                <form action={postData}>
                    <CardHeader>
                        <CardTitle className={`${syne.className}`}>General Data</CardTitle>
                        <CardDescription  className={`${syne.className}`}>
                            Please provide general information about yourself. Please dont
                            forget to save
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <div className="space-y-1">
                                <Label  className={`${syne.className}`}>Your Name</Label>
                                <Input
                                    name="name"
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    defaultValue={data?.name ?? undefined}
                                />
                            </div>
                            <div className="space-y-1">
                                <Label  className={`${syne.className}`}>Your Email</Label>
                                <Input
                                    name="email"
                                    type="email"
                                    id="email"
                                    placeholder="Your Email"
                                    disabled
                                    defaultValue={data?.email}
                                />
                            </div>
                        </div>
                    </CardContent>

                    <CardFooter>
                        <SubmitButton />
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}