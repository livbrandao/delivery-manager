import { getOrderById } from '@/utils/api';
import { OrderDetails } from '@/components/orders/OrderDetails';
import { notFound } from 'next/navigation';
import { mockOrders } from '@/mockData';

export default async function OrderDetailsPage({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  // Aguarda a resolução de params antes de acessar id
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // Usa o id resolvido
  const order = await getOrderById(id);

  if (!order) {
    notFound();
  }

  return <OrderDetails order={order} />;
}

export async function generateStaticParams() {
  return (
    mockOrders?.orders?.map((order) => ({
      id: order.id.toString(),
    })) || []
  );
}
