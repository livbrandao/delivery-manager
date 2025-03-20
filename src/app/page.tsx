'use client';

import React from 'react';
import Layout from '../components/layout/Layout';
import OrderList from '../components/orders/OrderList';
import OrderFilters from '../components/orders/OrderFilters';
import { useOrders } from '../hooks/useOrders';

export default function Home() {
  const { orders, loading, error, customerName, setCustomerName, status, setStatus, resetFilters } =
    useOrders();

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Pedidos</h1>
        </div>

        <OrderFilters
          customerName={customerName}
          setCustomerName={setCustomerName}
          status={status}
          setStatus={setStatus}
          resetFilters={resetFilters}
        />

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-md">{error}</div>
        )}

        <OrderList orders={orders} loading={loading} />
      </div>
    </Layout>
  );
}
