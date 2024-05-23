import { Syne } from "next/font/google";

const syne = Syne({
  weight: ["500", "600", "700","800"],
  subsets: ["latin-ext"],
  variable: "--font-syne",
});

export { syne }