'use client';
import Link from 'next/link';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
              Delivery Manager
            </Link>
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Pedidos
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
