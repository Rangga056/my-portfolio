import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Eclipse Dev Portfolio App",
  description: "Portfolio of Muhammad Rangga Miftahul Falah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <div className="flex h-screen flex-col pt-3">
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
