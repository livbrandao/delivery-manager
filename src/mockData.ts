import { OrdersResponse } from './types/Order';

export const mockOrders: OrdersResponse = {
  orders: [
    {
      uuid: '6f0945f1-6a83-4dfd-93bb-3242314196',
      id: '158924',
      status: 'Pendente',
      total: 120.5,
      delivery_cost: 12.0,
      shipping_method: 'Entrega Expressa',
      delivery_estimated: '2025-02-17',
      customer: {
        name: 'João da Silva',
        address: 'Rua das Palmeiras, 123',
      },
      items: [
        {
          imagem:
            'https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-phone-cell-icon-png-image_4163899.jpg',
          name: 'Celular XYZ',
          quantity: 1,
          price: 120.5,
        },
      ],
    },
    {
      uuid: '6f0945f1-6a83-4dfd-93bb-3242314197',
      id: '158925',
      status: 'Entregue',
      total: 72.3,
      delivery_cost: 12.0,
      shipping_method: 'Entrega Normal',
      delivery_estimated: '2025-02-17',
      customer: {
        name: 'Maria Oliveira',
        address: 'Av. Paulista, 987',
      },
      items: [
        {
          imagem:
            'https://img.freepik.com/vetores-premium/icone-de-fones-de-ouvido-no-fundo-branco-elemento-para-emblema-distintivo-sinal-ilustracao_124137-1172.jpg',
          name: 'Fone de Ouvido ABC',
          quantity: 1,
          price: 72.3,
        },
      ],
    },
    {
      uuid: '6f0945f1-6a83-4dfd-93bb-3242314198',
      id: '158926',
      status: 'Em Trânsito',
      total: 250.75,
      delivery_cost: 15.0,
      shipping_method: 'Entrega Expressa',
      delivery_estimated: '2025-02-18',
      customer: {
        name: 'Carlos Santos',
        address: 'Rua Augusta, 456',
      },
      items: [
        {
          imagem: 'https://cdn-icons-png.flaticon.com/512/3616/3616856.png',
          name: 'Tablet Pro',
          quantity: 1,
          price: 250.75,
        },
      ],
    },
    {
      uuid: '6f0945f1-6a83-4dfd-93bb-3242314199',
      id: '158927',
      status: 'Cancelado',
      total: 89.9,
      delivery_cost: 8.0,
      shipping_method: 'Entrega Normal',
      delivery_estimated: '2025-02-20',
      customer: {
        name: 'Ana Ferreira',
        address: 'Av. Brasil, 789',
      },
      items: [
        {
          imagem: 'https://th.bing.com/th/id/OIP.PJCXxYfPNiO9mVXJY3JeygHaGo?rs=1&pid=ImgDetMain',
          name: 'Carregador Wireless',
          quantity: 1,
          price: 89.9,
        },
      ],
    },
    {
      uuid: '6f0945f1-6a83-4dfd-93bb-3242314200',
      id: '158928',
      status: 'Pendente',
      total: 350.25,
      delivery_cost: 20.0,
      shipping_method: 'Entrega Expressa',
      delivery_estimated: '2025-02-19',
      customer: {
        name: 'Lucas Mendes',
        address: 'Rua Joaquim Floriano, 1500',
      },
      items: [
        {
          imagem: 'https://www.pngmart.com/files/13/Smartwatch-PNG-File.png',
          name: 'Smartwatch XYZ',
          quantity: 1,
          price: 350.25,
        },
      ],
    },
  ],
};
