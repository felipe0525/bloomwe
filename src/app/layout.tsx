import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'bloomWe - Tu Bienestar Juvenil',
  description: 'Aplicación de salud y bienestar para jóvenes con tips personalizados y seguimiento.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary/20">
        <div className="mobile-container">
          {children}
        </div>
      </body>
    </html>
  );
}
