import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation";
import { Provider } from "@/components/ui/provider";
import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { getContentBySlug } from "@/lib/content";

// Using local fonts instead of TypeKit for better performance:
// - No external HTTP requests
// - Next.js automatic optimization
// - Better Core Web Vitals scores
// - More reliable (no CDN dependency)
const gibson = localFont({
  src: [
    {
      path: "../../public/fonts/Gibson-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gibson.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gibson-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gibson-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gibson",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nomad Hotels - Digital Nomad Accommodations",
  description: "Find the perfect hotel for digital nomads worldwide",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { home } = await getContentBySlug(
    "home",
    "index"
  );

  return (
    <html lang="en" className={gibson.variable}>
      <body>
        <Provider>
          <Navigation content={home.navigation} services={home.services} />
          <main>{children}</main>
          <Footer content={home.footer} />
        </Provider>
      </body>
    </html>
  );
}
