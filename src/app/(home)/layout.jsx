import { Inter } from "next/font/google";
import "../globals.css";
import ShopNavbar from "../components/ShopNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lexardi Lab",
  description: "Lexardi is laboratory of ideas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ShopNavbar />
        {children}
      </body>
    </html>
  );
}
