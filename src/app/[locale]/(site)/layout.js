import Header from "@/components/core/auth/Header";

export default function SiteLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
