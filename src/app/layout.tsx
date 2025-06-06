import { Provider } from "@/components/ui/provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nomad Hotels - Digital Nomad Accommodations",
  description: "Find the perfect hotel for digital nomads worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
