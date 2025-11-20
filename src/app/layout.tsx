import { Kumbh_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";
import LottieLoader from "@/components/layout/loader";

const kumbh = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-kumbh",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kumbh.variable}>
      <body>
        {children}
        <LottieLoader />
        <Toaster position="top-right" richColors theme="light" />
      </body>
    </html>
  );
}
