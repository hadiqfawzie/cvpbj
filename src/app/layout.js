
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Link from "next/link";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CV Putra Blimbingsari Jaya",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed top-0 left-0 right-0">
          <Nav />
        </div>
        <div className="m-1 mt-20 mb-12">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
