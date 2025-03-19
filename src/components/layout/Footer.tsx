'use client';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-4 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Delivery Manager. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
