import "../globals.css";

export const metadata = {
  title: "Lexardi Lab",
  description: "Lexardi is laboratory of ideas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
