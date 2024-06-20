import { NextAuthProvider } from "@/components/core/provider/NextAuthProvider";
import { Toaster } from "@/components/ui/sonner";
import { syne } from "@/lib/utils/fonts";
import 'react-device-emulator/lib/styles/style.css';

import "@/styles/globals.css";
import "@/styles/app.scss";

export default function LocaleLayout({
  children,
  params: { locale },
}) {
  return (
    <html lang={locale} className={`${syne.variable} dark`} >
      <body className="W-full h-full">
        <NextAuthProvider>
          {children}
          <Toaster position="top-center" richColors />
        </NextAuthProvider>
      </body>
    </html>
  );
}
