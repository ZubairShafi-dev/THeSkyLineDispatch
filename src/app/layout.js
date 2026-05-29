import { Bebas_Neue, Barlow } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const barlow = Barlow({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

export const metadata = {
  title: "The SkyLine Dispatch | Premium Truck Dispatch Services",
  description: "Beyond the Horizon: Where Quality Loads Meet Clarity. The SkyLine Dispatch offers professional, real-time truck dispatch control, rate negotiation, and lane planning for owner-operators and fleets.",
  metadataBase: new URL("https://skylinedispatch.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The SkyLine Dispatch | Premium Truck Dispatch Services",
    description: "Move Freight: Not Paperwork — Real-Time Dispatch Control with transparent 6% flat fee.",
    url: "https://skylinedispatch.org",
    siteName: "The SkyLine Dispatch",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bebasNeue.variable} ${barlow.variable} font-barlow bg-slate-50 text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
