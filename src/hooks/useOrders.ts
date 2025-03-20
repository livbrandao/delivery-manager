import { useState, useEffect, useMemo } from 'react';
import { Order } from '../types/Order';
import { getOrders } from '../utils/api';

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [customerName, setCustomerName] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await getOrders();
        setOrders(response.orders);
        setError(null);
      } catch (err) {
        setError('Não foi possível carregar os pedidos. Tente novamente mais tarde.');
        console.error('Erro ao carregar pedidos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const resetFilters = () => {
    setCustomerName('');
    setStatus('');
  };

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesCustomerName = customerName
        ? order.customer.name.toLowerCase().includes(customerName.toLowerCase())
        : true;

      const matchesStatus = status ? order.status === status : true;

      return matchesCustomerName && matchesStatus;
    });
  }, [orders, customerName, status]);

  return {
    orders: filteredOrders,
    loading,
    error,
    customerName,
    setCustomerName,
    status,
    setStatus,
    resetFilters,
  };
};
