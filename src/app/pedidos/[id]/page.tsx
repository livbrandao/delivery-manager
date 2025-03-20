import { mockOrders } from '../../../mockData';
import ClientOrderDetailsPage from './client-page';

// Esta função é executada durante o build para gerar as páginas estáticas
export async function generateStaticParams() {
  // Retorna um array de objetos, cada um representando os parâmetros para uma página
  return mockOrders.orders.map((order) => ({
    id: order.id,
  }));
}

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  return <ClientOrderDetailsPage id={params.id} />;
}
