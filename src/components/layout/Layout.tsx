import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="h-0 flex-grow overflow-y-auto ">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
