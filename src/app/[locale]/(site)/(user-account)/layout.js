import {DashboardNav} from "@/components/core/general/DashboardNav";

export default async function DashboardLayout({ children }) {

    return (
        <div className="container flex flex-col px-20 space-y-6 mt-20">
            <div className="grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
                <aside className="hidden w-[200px] flex-col md:flex">
                    <DashboardNav />
                </aside>
                <main>{children}</main>
            </div>
        </div>
    );
}
