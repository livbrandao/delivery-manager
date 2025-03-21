import { getOrderById } from '@/utils/api';
import { OrderDetails } from '@/components/orders/OrderDetails';
import { notFound } from 'next/navigation';
import { mockOrders } from '@/mockData';

export default async function OrderDetailsPage({
  params,
}: {
  params: { id: string } | Promise<{ id: string }>;
}) {
  // Aguarda a resolução de params
  const resolvedParams = await Promise.resolve(params);

  // Pega o id após a resolução
  const id = resolvedParams.id;

  // Verifica o é id válido
  if (!id) {
    notFound();
  }

  // Busca os dados do pedido com o id
  const order = await getOrderById(id);

  // Pedido não encontrado
  if (!order) {
    notFound();
  }

  // Renderiza usando os dados do pedido
  return <OrderDetails order={order} />;
}

// Gera página estática na build
export async function generateStaticParams() {
  return (
    mockOrders?.orders?.map((order) => ({
      id: order.id.toString(),
    })) || []
  );
}
