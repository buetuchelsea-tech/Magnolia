import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MAGNOLIA | Cartomancie & Astrologie',
  description: 'Espace de cartomancie, Tarot de Marseille et astrologie.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="antialiased bg-cream-50 text-charcoal">{children}</body>
    </html>
  );
}
