import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Backstrap Law",
  description: "Legal resources, news & insights platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black overflow-x-hidden">

        
        <div className="w-full overflow-hidden">

          <Navbar />

          
          <main className="min-h-screen w-full">
            {children}
          </main>

          <Toaster
position="top-right"
/>

          <Footer />

        </div>

      </body>
    </html>
  );
}