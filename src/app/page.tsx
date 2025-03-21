'use client';

import Button from '@/components/common/Button';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-100 text-center">
      <h1 className="text-4xl font-bold text-purple-900">Bem-vindo ao Delivery Manager</h1>
      <p className="text-lg text-purple-600 mt-2">
        Gerencie seus pedidos de forma rápida e eficiente.
      </p>

      <Link href="/pedidos">
        <Button variant="secondary" className="mt-6">
          Ver Lista de Pedidos
        </Button>
      </Link>
    </div>
  );
}
