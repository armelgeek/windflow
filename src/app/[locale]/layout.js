import { NextAuthProvider } from "@/components/core/provider/NextAuthProvider";
import { Toaster } from "@/components/ui/sonner";
import { poppins } from "@/lib/utils/fonts";

import "@/styles/globals.css";
import "@/styles/app.scss";

export default function LocaleLayout({
  children,
  params: { locale },
}) {
  return (
    <html lang={locale} className={`${poppins.variable} dark`}>
      <body className="flex flex-col min-h-screen font-sans antialiased bg-background dark">
        <NextAuthProvider>
          {children}
          <Toaster position="top-center" richColors />
        </NextAuthProvider>
      </body>
    </html>
  );
}
