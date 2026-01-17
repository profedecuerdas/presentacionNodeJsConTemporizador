import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Presentación - Remigimidi",
  description: "Propuesta pedagógica Jefferson Soto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
