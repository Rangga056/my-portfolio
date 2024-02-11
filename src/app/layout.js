import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
        <div className="w-screen h-screen bg-transparent text-black max-w-[1440px] m-auto">
          <div className="h-24">
            <Navbar />
          </div>
          <div className="h-[calc(100dvh-6rem)]">{children}</div>
        </div>
      </body>
    </html>
  );
}
