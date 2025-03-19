import { ReactNode } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="pt-BR">
      <head />
      <body>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          <main className="flex-grow py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
