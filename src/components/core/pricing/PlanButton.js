"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { syne } from "@/lib/utils/fonts";
const LEMON_SQUEEZY_API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NGQ1OWNlZi1kYmI4LTRlYTUtYjE3OC1kMjU0MGZjZDY5MTkiLCJqdGkiOiJjNTJkMDA1ZWEyNzZlYTEwNDc5MzUwZTFlYzFiNjNmZGY5NDAzNzk5MjFkZDU3N2U0YTRmOTkzZTFmMGIxMzk4ZDYzYzdhNmZlNTQyNTc3ZSIsImlhdCI6MTcxNTk2NjU3OC44NjUzNjksIm5iZiI6MTcxNTk2NjU3OC44NjUzNzIsImV4cCI6MjAzMTQ5OTM3OC44NDE2NzIsInN1YiI6IjIzNzg2OTIiLCJzY29wZXMiOltdfQ.dzqpBLsPUFW0Z2FkNDbCTKHuuTh3x3erS6PMElWaAHIOLugoA6NrtZtDmBJz2DCl7tXuDLkzGEdRHhRucO3rJU3zzPDOdfCC8s7YB9j8Gqy45Hpq9UFFGECN6qm3HARVpQn4BrOgPCQo6cOagfI852qTUwpyppBLNmUCP6TPzaeXNEyxo1EyejfWBcEZWsZE09igOucwJwLd9UyCWz8h5Bk_v8ZYZIp9iBhOilfYu1t6buz1rmqciscdyFpjoIdExj2TdkaIlShq87jRFPYUONNKv63Y5iXbqkN4mXfR-nQDcEHbSzCGlw92c3ZA0ZWk8cAZtbquI4GduLz5OQn32lmB7s2pwdFq0q5HzUaFTq0K8wboPTCGK-FCVesSdKo5MQYSkYjdzzr9BDd1lVKN_bM8Bj7YqimedwbS1fmW9f2bNQOkYpLP1fdeN4t2jym9S2QWDyVFGMJ-rZjeAn-bO61qPCDIYACuVol-8HvB16BqWCwdMiyzLDmmLsBME_15";
const LEMON_SQUEEZY_STORE_ID = "87066";
export default function PlanButton({ plan }) {
    const { data: session } = useSession();
    const [isMutating, setIsMutating] = useState(false);

    async function createCheckout() {
        setIsMutating(true);
        const response = await axios.post("https://api.lemonsqueezy.com/v1/checkouts", {
            data: {
                type: "checkouts",
                attributes: {
                    "checkout_options": {
                        embed: true,
                        media: false,
                    },
                    "checkout_data": {
                        "email": session.user.email,
                        "custom": {
                            "user_id": session.user.id,
                        },
                    },
                    "product_options": {
                        "enabled_variants": [plan.id],
                        "redirect_url": `${process.env.NEXT_PUBLIC_SITE_URL}`,
                        "receipt_link_url": `${process.env.NEXT_PUBLIC_SITE_URL}`,
                        "receipt_button_text": "Go back",
                        "receipt_thank_you_note": "Thank you for signing up!"
                    }
                },
                relationships: {
                    store: {
                        data: {
                            type: "stores",
                            id: LEMON_SQUEEZY_STORE_ID,
                        },
                    },
                    variant: {
                        data: {
                            type: "variants",
                            id: plan.id,
                        },
                    },
                },
            },
        },
            {
                headers: {
                    Accept: "application/vnd.api+json",
                    "Content-Type": "application/vnd.api+json",
                    Authorization: `Bearer ${LEMON_SQUEEZY_API_KEY}`,
                }

            });
        LemonSqueezy.Url.Open(response.data.data.attributes.url);
        setIsMutating(false);
    }

    return (
        <Button
            onClick={createCheckout}
            className={`${syne.className} gap-1`}
        >
            {isMutating ? (
                <>
                    <Loader size={16} className="animate animate-spin" />
                    <span className="animate-pulse">Processing</span>
                </>
            ) : (
                "Choose plan"
            )}
        </Button>
    );
}
