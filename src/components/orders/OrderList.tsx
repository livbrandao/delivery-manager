import React from 'react';
import { Order } from '../../types/Order';
import OrderCard from './OrderCard';
import Spinner from '../common/Spinner';

interface OrderListProps {
  orders: Order[];
  loading: boolean;
}

const OrderList: React.FC<OrderListProps> = ({ orders, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <Spinner size="large" />
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <p className="text-purple-500">Nenhum pedido encontrado.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderList;
