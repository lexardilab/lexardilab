import ShopNAvbar from "../components/ShopNAvbar";
import "../globals.css";

export const metadata = {
  title: "Lexardi Lab | Tienda",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ShopNAvbar />
        {children}
      </body>
    </html>
  );
}
