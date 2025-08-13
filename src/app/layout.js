import Navbar from "@/Component/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/lib/Providers";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MediChain",
  icons: {
    icon: "/favicon.png",
  },
  description:
    "Streamline healthcare management with MediChain: a secure and efficient platform for medical appointments, patient records, and prescription management, empowering patients, doctors, and administrators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="medichainTheme">
      <body className={inter.className}>
        <Providers>
          <ToastContainer />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
