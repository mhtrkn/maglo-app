import { Kumbh_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";
import LottieLoader from "@/components/layout/loader";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
        <Toaster position="top-right" richColors theme="light" />
        <LottieLoader />
        {children}
        {/* Vercel üzerinden hız kontrolü yapabilmek için gerekli olan component  */}
        <SpeedInsights />
      </body>
    </html>
  );
}
