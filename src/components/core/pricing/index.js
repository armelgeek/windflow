import React from 'react';
// shadcn components
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { getServerSession } from 'next-auth';
import { getUserById } from '@/lib/prisma/users';
import { authOptions } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import PlanButton from './PlanButton';
import { LemonSquezzyLoad } from './LemonSquezzyLoad';
import { syne } from '@/lib/utils/fonts';

const plans = [
    { id: "371582", title: 'Windflow Monthly', price: '9.99/month', description: 'Super description', features: ['1 Workspace', 'Unlimited Public Projects', 'Community Access'] },
    { id: "371584", title: 'Windflow Yearly', price: '99.99/year', description: 'Super description', features: ['1 Workspace', 'Unlimited Public Projects', 'Community Access'] },
];

const Plans = async () => {

    const session = await getServerSession(authOptions);
    let user = null;
    if (session?.user?.id) {
        user = await getUserById(session.user.id);
    }
    const userSubscriptions = user && user.user ? user.user.subscriptions : [];
    const isCurrentPlan=(title) => userSubscriptions[0].name === title;

    return (
        <div className="flex flex-col items-start justify-center max-w-4xl gap-6 mx-auto md:flex-row">
            {plans.map(plan => (
                <Card
                    className="flex-1 w-[150px]"
                    key={plan.id}
                    data-productid={plan.id}
                    data-variantid={plan.id}
                >
                    <CardHeader>
                        <CardTitle className={`${syne.className}`}>{plan.title}</CardTitle>
                        <div
                            className={`${syne.className}`}
                            dangerouslySetInnerHTML={{
                                __html: plan.description,
                            }}
                        />
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <div className={`${syne.className} text-2xl font-bold`}>
                            ${plan.price}
                        </div>
                        <ul className="space-y-2 list-disc list-inside">
                            {plan.features.map((feature, index) => (
                                <li key={index} className={`${syne.className}`}>{feature}</li>
                            ))}
                        </ul>
                        {userSubscriptions.length > 0 ? (
                            <Button  className={`${syne.className}`} disabled={isCurrentPlan(plan.title)}>{isCurrentPlan(plan.title) ? 'Current Plan': 'Switch Plan'}</Button>
                        ) : (
                            <PlanButton plan={plan} />
                        )}
                    </CardContent>
                </Card>
            ))}
          <LemonSquezzyLoad/>
        </div>
    );
};

export default Plans;
