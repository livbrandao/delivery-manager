'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../../components/layout/Layout';
import OrderDetails from '../../../components/orders/OrderDetails';
import Spinner from '../../../components/common/Spinner';
import Button from '../../../components/common/Button';
import { getOrderById } from '../../../utils/api';
import { Order } from '../../../types/Order';

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
      if (!id) return;

      try {
        setLoading(true);
        const orderData = await getOrderById(id);

        if (orderData) {
          setOrder(orderData);
        } else {
          setError('Pedido não encontrado');
          router.push('/404');
        }
      } catch (err) {
        setError('Não foi possível carregar os detalhes do pedido. Tente novamente mais tarde.');
        console.error('Erro ao carregar detalhes do pedido:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id, router]);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex justify-center items-center">
          <Spinner size="large" />
        </div>
      </Layout>
    );
  }

  if (error || !order) {
    return (
      <Layout>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-xl font-medium text-red-600 mb-4">Erro</h1>
          <p className="text-gray-700 mb-6">{error || 'Ocorreu um erro desconhecido.'}</p>
          <Button variant="primary" onClick={() => router.push('/')}>
            Voltar para a lista de pedidos
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <OrderDetails order={order} />
    </Layout>
  );
}
