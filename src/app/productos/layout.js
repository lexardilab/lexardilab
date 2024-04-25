import "../globals.css";
import ShopNavbar from "../components/ShopNavbar";

export const metadata = {
  title: "Lexardi Lab | Tienda",
  description: "Lexardi is laboratory of ideas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ShopNavbar />
        {children}
      </body>
    </html>
  );
}
