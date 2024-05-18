import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions, User } from "next-auth";
import GithubProvider from 'next-auth/providers/github';
import prisma from "@/lib/prisma";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    debug: true,
    pages: {
        signIn: '/signin',
    },
    session: {
        strategy: "jwt",
    },
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ],
    callbacks: {
        async jwt({ token, trigger, session, account, user }) {
            // Initial sign-in
            if (account && user) {
                token.userId = user.id;
                const userFromDb = await prisma.user.findUnique({
                    where: { email: user.email },
                });
                if (userFromDb?.jobTitle) {
                    token.jobTitle = userFromDb.jobTitle;
                }
            }
            // Triggers
            if (trigger === 'update' && session?.name) {
                token.name = session.name;
            }
            if (trigger === 'update' && session?.jobTitle) {
                token.jobTitle = session.jobTitle;
            }
            return token;
        },
        // Custom Session
        async session({ session, token }) {
            if (token?.userId) {
                (session.user).id = token.userId;
            }
            if (token?.jobTitle) {
                (session.user).jobTitle = token.jobTitle;
            }
            if (token?.userId) {
                (session.user).id = token.userId;
                // Fetch user with subscriptions
                const userWithSubscriptions = await prisma.user.findUnique({
                    where: { id: token.userId },
                    include: {
                        subscriptions: true, // Include subscriptions in the result
                    },
                });
                // Add subscriptions to the session
                (session.user).subscriptions = userWithSubscriptions?.subscriptions;
            }
            return session;
        },
    },
}
