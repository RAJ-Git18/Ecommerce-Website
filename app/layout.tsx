import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Ecommerce Website",
  description: "Catch up with all the new products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark:bg-gray-800">
      <body className=" flex flex-col">

        <nav className="">
          <Navbar/>
        </nav>
        
        <main className="flex-grow m-2 min-h-screen ">{children}</main>

        <footer className="">
          {/* footer content */}
          <Footer/>
        </footer>

      </body>
    </html>
  );
}
