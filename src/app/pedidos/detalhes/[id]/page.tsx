import { mockOrders } from '@/mockData';
import ClientOrderDetailsPage from './client-page';

// Função OBRIGATÓRIA para gerar as rotas dinâmicas na build
export async function generateStaticParams() {
  return (
    mockOrders?.orders?.map((order) => ({
      id: order.id.toString(),
    })) || []
  );
}

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  return <ClientOrderDetailsPage id={params.id} />;
}
