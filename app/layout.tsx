import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Isling',
  description: 'There are a pet in the zoo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
