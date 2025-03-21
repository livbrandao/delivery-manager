'use client';
import React from 'react';
import Link from 'next/link';
import { Order } from '../../types/Order';
import Card from '../common/Card';
import StatusBadge from '../common/StatusBadge';
import { formatCurrency, formatDate } from '../../utils/formatters';

interface OrderCardProps {
  order: Order;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <Link href={`/pedidos/detalhes/${order.id}`} className="block">
      <Card className="hover:shadow-2xl hover:shadow-purple-300 transition-shadow duration-300">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium text-purple-900">Pedido #{order.id}</h3>
            <p className="mt-1 text-sm text-purple-500">Cliente: {order.customer.name}</p>
          </div>
          <StatusBadge status={order.status} />
        </div>
        <div className="mt-4 border-t border-purple-200 pt-4">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-purple-500">Previsão de entrega</p>
              <p className="text-sm font-medium">{formatDate(order.delivery_estimated)}</p>
            </div>
            <div>
              <p className="text-sm text-purple-500">Valor total</p>
              <p className="text-sm font-medium">{formatCurrency(order.total)}</p>
            </div>
            <div>
              <p className="text-sm text-purple-500">Método de entrega</p>
              <p className="text-sm font-medium">{order.shipping_method}</p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default OrderCard;
