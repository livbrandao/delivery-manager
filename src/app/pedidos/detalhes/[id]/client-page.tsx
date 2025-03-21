'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/common/Button';
import Spinner from '@/components/common/Spinner';
import OrderDetails from '@/components/orders/OrderDetails';
import { Order } from '@/types/Order';
import { getOrderById } from '@/utils/api';
import { HiArrowLeft } from 'react-icons/hi';

interface ClientOrderDetailsPageProps {
  id: string;
}

export default function ClientOrderDetailsPage({ id }: ClientOrderDetailsPageProps) {
  const router = useRouter();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrder = async () => {
      if (!id) {
        setError('ID do pedido inválido');
        return;
      }

      try {
        setLoading(true);
        const orderData = await getOrderById(id);

        if (!orderData) {
          setError('Pedido não encontrado');
        } else {
          setOrder(orderData);
        }
      } catch (err) {
        setError('Não foi possível carregar os detalhes do pedido. Tente novamente mais tarde.');
        console.error('Erro ao carregar detalhes do pedido:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <Spinner size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-xl font-medium text-red-600 mb-4">Erro</h1>
        <p className="text-purple-700 mb-6">{error}</p>
        <Button
          onClick={() => router.push('/pedidos')}
          variant="primary"
          className="flex items-center space-x-2 "
        >
          <HiArrowLeft size={20} className="mr-2" /> Voltar para a lista de pedidos
        </Button>
      </div>
    );
  }

  return <OrderDetails order={order} />;
}
