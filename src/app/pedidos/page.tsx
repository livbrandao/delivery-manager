'use client';
import OrderFilters from '@/components/orders/OrderFilters';
import OrderList from '@/components/orders/OrderList';
import { useOrders } from '@/hooks/useOrders';
import React from 'react';

export default function Pedidos() {
  const { orders, loading, error, customerName, setCustomerName, status, setStatus, resetFilters } =
    useOrders();

  return (
    <div className="space-y-6 py-10 my-16 overflow-auto">
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
  );
}
