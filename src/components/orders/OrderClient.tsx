'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getOrderById } from '@/utils/api';
import { Order } from '@/types/Order';
import { OrderDetails } from '@/components/orders/OrderDetails';
import Spinner from '@/components/common/Spinner';
import { MdError } from 'react-icons/md';
import Button from '@/components/common/Button';
import { useRouter } from 'next/navigation';

export default function OrderClient() {
  const params = useParams();
  const router = useRouter();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrder = async () => {
      if (!params || !params.id) {
        setError('ID do pedido inválido');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const id = Array.isArray(params.id) ? params.id[0] : params.id;
        const orderData = await getOrderById(id);

        if (!orderData) {
          setError('Pedido não encontrado');
        } else {
          setOrder(orderData);
        }
      } catch (err) {
        setError('Não foi possível carregar os detalhes do pedido');
        console.error('Erro ao carregar detalhes do pedido:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <Spinner size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md py-16 mt-24 flex flex-col items-center space-y-6">
        <div className="flex items-center space-x-4 bg-red-100 p-4 rounded-full">
          <MdError size={48} className="text-red-600" />
          <h1 className="text-xl font-bold text-red-600 uppercase">Erro</h1>
        </div>
        <p className="text-purple-700 mb-6">{error}</p>
        <Button
          onClick={() => router.push('/pedidos')}
          variant="outline"
          className="flex items-center space-x-2"
        >
          Voltar para a lista de pedidos
        </Button>
      </div>
    );
  }

  return order ? <OrderDetails order={order} /> : null;
}
