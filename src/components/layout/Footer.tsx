import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-inner mt-8">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Delivery Manager. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
