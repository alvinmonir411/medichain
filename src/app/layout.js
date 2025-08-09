// medichain-frontend/src/app/layout.jsx
import "./globals.css";
import { Inter } from "next/font/google";
// import { Providers } from './providers'; // You'll create this later for React Query

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MediChain",
  description:
    "Streamline healthcare management with MediChain: a secure and efficient platform for medical appointments, patient records, and prescription management, empowering patients, doctors, and administrators.",
};

export default function RootLayout({ children }) {
  return (
    // Apply your DaisyUI theme here using data-theme
    <html lang="en" data-theme="medichainTheme">
      <body className={inter.className}>
        {/* When you set up React Query, wrap children with <Providers> */}
        {/* <Providers> */}
        {children}
        {/* </Providers> */}
      </body>
    </html>
  );
}
