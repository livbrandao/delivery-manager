import React from 'react';
import { Order } from '../../types/Order';
import Card from '../common/Card';
import StatusBadge from '../common/StatusBadge';
import { formatCurrency, formatDate } from '../../utils/formatters';
import Button from '../common/Button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface OrderDetailsProps {
  order: Order | null;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  const router = useRouter();

  if (!order) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-purple-100 text-center">
        <h1 className="text-4xl font-bold text-purple-900">Desculpe! :/</h1>
        <p className="text-lg text-purple-600 mt-2">Detalhes do pedido não disponíveis</p>

        <Link href="/pedidos">
          <Button variant="outline" className="mt-6">
            Voltar
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6 my-10 py-16">
      <div className="flex flex-col justify-start items-start">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-purple-900">Pedido #{order.id}</h1>
          <StatusBadge status={order.status} />
        </div>
        <p className="mt-1 text-sm text-purple-500">ID único: {order.uuid}</p>
      </div>

      <Card>
        <h2 className="text-lg font-medium text-purple-900">Informações do Cliente</h2>
        <div className="mt-4">
          <p>
            <span className="font-medium">Nome:</span> {order.customer.name}
          </p>
          <p>
            <span className="font-medium">Endereço:</span> {order.customer.address}
          </p>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-medium text-purple-900">Informações de Entrega</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-purple-500">Método de Entrega</p>
            <p className="font-medium">{order.shipping_method}</p>
          </div>
          <div>
            <p className="text-sm text-purple-500">Custo de Entrega</p>
            <p className="font-medium">{formatCurrency(order.delivery_cost)}</p>
          </div>
          <div>
            <p className="text-sm text-purple-500">Previsão de Entrega</p>
            <p className="font-medium">{formatDate(order.delivery_estimated)}</p>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-medium text-purple-900">Itens do Pedido</h2>
        <div className="mt-4">
          <table className="min-w-full divide-y divide-purple-200">
            <thead className="bg-purple-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-purple-500 uppercase tracking-wider"
                >
                  Produto
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-purple-500 uppercase tracking-wider"
                >
                  Quantidade
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-purple-500 uppercase tracking-wider"
                >
                  Preço Unitário
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-purple-500 uppercase tracking-wider"
                >
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-purple-200">
              {order.items.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <Image
                          width={40}
                          height={40}
                          className="rounded-md"
                          src={item.imagem}
                          alt={item.name}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-purple-900">{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-purple-900">{item.quantity}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-purple-900">{formatCurrency(item.price)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-purple-900">
                      {formatCurrency(item.price * item.quantity)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-medium text-purple-900">Resumo do Pedido</h2>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <p className="text-sm text-purple-500">Subtotal</p>
            <p className="text-sm font-medium">
              {formatCurrency(order.total - order.delivery_cost)}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-purple-500">Custo de Entrega</p>
            <p className="text-sm font-medium">{formatCurrency(order.delivery_cost)}</p>
          </div>
          <div className="pt-4 border-t border-purple-200 flex justify-between">
            <p className="text-base font-medium text-purple-900">Total</p>
            <p className="text-base font-medium text-purple-900">{formatCurrency(order.total)}</p>
          </div>
        </div>
      </Card>

      <div className="flex justify-end">
        <Button variant="outline" onClick={() => router.back()}>
          Voltar para a lista
        </Button>
      </div>
    </div>
  );
};

export default OrderDetails;
