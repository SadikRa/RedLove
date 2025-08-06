import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ClientThemeProvider from "@/components/ClientThemeProvider";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RedLove ",
  description: "Give Love With Every Drop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} bg-gray-50 dark:bg-gray-900`}>
        <ClientThemeProvider>
          {" "}
          <div className="max-w-7xl mx-auto">
            {children}
            <Toaster />
          </div>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
