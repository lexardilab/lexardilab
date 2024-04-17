import ShopNavbar from "../components/ShopNavbar";
import "../globals.css";

export const metadata = {
  title: "Lexardi Lab | Productos",
  description: "",
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
