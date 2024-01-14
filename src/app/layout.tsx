import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";
import AppProvider from "@/store/provider";
import RotateToLandscapeNotifier from "@/components/specific/Home/RotateToLandscapeNotifier";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AlertProvider } from "@/components/shared/Alert";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arcade Booking",
  description: "Arcade Booking",
  // icons:{
  //   icon:['/logo-new.png']
  // }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          {" "}
          <AppProvider>
            <AlertProvider>
              {children}
            </AlertProvider>
            <RotateToLandscapeNotifier />
          </AppProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
