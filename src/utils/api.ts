import { mockOrders } from '../mockData';
import { Order, OrdersResponse } from '../types/Order';

export const getOrders = async (): Promise<OrdersResponse> => {
  // Simula uma chamada de API com um delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockOrders);
    }, 500);
  });
};

export const getOrderById = async (id: string): Promise<Order | undefined> => {
  // Simula uma chamada de API com um delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const order = mockOrders.orders.find((order) => order.id === id);
      resolve(order);
    }, 500);
  });
};
