import React from 'react';
import Input from '../common/Input';
import Select from '../common/Select';
import Button from '../common/Button';

interface OrderFiltersProps {
  customerName: string;
  setCustomerName: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  resetFilters: () => void;
}

const OrderFilters: React.FC<OrderFiltersProps> = ({
  customerName,
  setCustomerName,
  status,
  setStatus,
  resetFilters,
}) => {
  const statusOptions = [
    { value: '', label: 'Todos' },
    { value: 'Pendente', label: 'Pendente' },
    { value: 'Em Trânsito', label: 'Em Trânsito' },
    { value: 'Entregue', label: 'Entregue' },
    { value: 'Cancelado', label: 'Cancelado' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-lg font-medium text-purple-900 mb-4">Filtros</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Nome do Cliente"
          placeholder="Buscar por nome do cliente"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <Select
          label="Status do Pedido"
          options={statusOptions}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>
      <div className="mt-4 flex justify-end">
        <Button variant="outline" onClick={resetFilters}>
          Limpar Filtros
        </Button>
      </div>
    </div>
  );
};

export default OrderFilters;
