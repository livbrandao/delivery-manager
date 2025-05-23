import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Layout from '@/components/layout/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Delivery Manager',
  description: 'Sistema de gerenciamento de pedidos de entrega',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
