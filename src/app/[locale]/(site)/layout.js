import Header from "@/components/core/auth/Header";
import { TopBar } from "@/components/core/general/TopBar";

export default function SiteLayout({ children }) {
    return (
        <>
            <TopBar/>
            {children}
        </>
    );
}
