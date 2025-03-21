import { getOrderById } from '@/utils/api';
import { OrderDetails } from '@/components/orders/OrderDetails';
import { notFound } from 'next/navigation';
import { mockOrders } from '@/mockData';

// Certifique-se de que params seja await antes de acessar suas propriedades
export default async function OrderDetailsPage({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  // Aguarde a resolução de params antes de acessar id
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // Agora use o id resolvido
  const order = await getOrderById(id);

  // Handle order not found
  if (!order) {
    notFound();
  }

  // Render using the order data directly
  return <OrderDetails order={order} />;
}

// Generate static pages at build time
export async function generateStaticParams() {
  return (
    mockOrders?.orders?.map((order) => ({
      id: order.id.toString(),
    })) || []
  );
}
