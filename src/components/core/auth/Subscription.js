import React, { Suspense } from "react";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { formatDistanceToNow, format } from "date-fns";

// Components
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

// Icons
import { BadgeCheck } from "lucide-react";
import Plans from "../pricing";
import { Section } from "../session/Section";
import {Button} from "@/components/ui/button";
import CancelSubscription from "@/components/core/pricing/CancelSubscription";
import ResumeSubscription from "@/components/core/pricing/ResumeSubscription";

export default async function UserSubscription() {
  const session = await getServerSession(authOptions);
  const subscription = session?.user?.subscriptions[0];
  console.log(subscription);
  return (
    <>
      <Section size="sm">
        {subscription ? (
            <>
                <Card className="border-primary">
                  <CardHeader>
                    <CardTitle>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold">
                          {subscription.name}
                        </span>
                        <BadgeCheck size={26} className="text-primary" />
                      </div>
                    </CardTitle>
                    <CardDescription>
                      Status <Badge>{subscription.status}</Badge>
                    </CardDescription>

                  </CardHeader>
                  <CardContent>
                    {subscription.status === 'active' && (
                        <>
                            <p>
                              Your subscription will <b>auto-renew</b> in{" "}
                              {formatDistanceToNow(subscription.renewsAt)}.
                            </p>
                            <p>
                              <small>
                                Renewal date:{" "}
                                {format(subscription.renewsAt, "MM/dd/yyyy 'at' HH:mm zzzz")}
                              </small>
                            </p>

                                <CancelSubscription subscriptionId={subscription?.lemonSqueezyId} />
                        </>
                    )}
                    {subscription.status === 'cancelled' && (
                        <>
                          <p>
                            <small>End At: {format(subscription.endsAt, "MM/dd/yyyy 'at' HH:mm zzzz")}</small>
                          </p>
                          <ResumeSubscription  subscriptionId={subscription?.lemonSqueezyId}/>
                        </>
                    )}
                  </CardContent>
                </Card>
            </>
        ) : (
            <Plans/>
        )}
      </Section>
    </>
  );
}
