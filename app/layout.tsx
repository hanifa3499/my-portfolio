import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Hanifa | Software Engineering Student",
  description: "Software Engineering Student Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
