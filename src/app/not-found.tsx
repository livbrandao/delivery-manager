'use client';
import Button from '@/components/common/Button';
import { useRouter } from 'next/navigation';

import { HiArrowLeft } from 'react-icons/hi';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen container flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-purple-800 mb-6">Página não encontrada</h2>
      <p className="text-purple-600 mb-8">
        A página que você está procurando não existe ou foi removida.
      </p>
      <Button
        onClick={() => router.back()}
        variant="primary"
        className="flex items-center space-x-2 "
      >
        <HiArrowLeft size={20} className="mr-2" /> Voltar para o início
      </Button>
    </div>
  );
}
