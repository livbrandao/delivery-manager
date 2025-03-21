import React from 'react';
import Link from 'next/link';
import { MdError } from 'react-icons/md';
import Button from '@/components/common/Button';

export default function NotFound() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md py-16 mt-24 flex flex-col items-center space-y-6">
      <div className="flex items-center space-x-4 bg-red-100 p-4 rounded-full">
        <MdError size={48} className="text-red-600" />
        <h1 className="text-xl font-bold text-red-600 uppercase">Erro</h1>
      </div>
      <p className="text-purple-700 mb-6">Pedido não encontrado</p>
      <Link href="/pedidos" passHref>
        <Button variant="outline" className="flex items-center space-x-2">
          Voltar para a lista de pedidos
        </Button>
      </Link>
    </div>
  );
}
