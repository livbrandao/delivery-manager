import ClientOrderDetailsPage from './client-page';
import { mockOrders } from '@/mockData';

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  return <ClientOrderDetailsPage id={params.id} />;
}

// Função OBRIGATÓRIA para geração de páginas estáticas no build
export async function generateStaticParams() {
  return (
    mockOrders?.orders?.map((order) => ({
      id: order.id.toString(),
    })) || []
  );
}
