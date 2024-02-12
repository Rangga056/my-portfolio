import { Poppins } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";

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
        <TransitionProvider children={children} />
      </body>
    </html>
  );
}
