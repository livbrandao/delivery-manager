import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdHome } from 'react-icons/md';
import { HiOutlineTicket } from 'react-icons/hi';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow fixed top-0 left-0 w-full z-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center decoration-none border-none">
              <Image
                className="h-10 w-10"
                src="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/jvedziujtyxkyqg8fufr"
                alt="logo-hunii"
                width={40}
                height={40}
                unoptimized={true}
              />
              <span className="text-xl font-bold text-purple-950 ml-4"> Delivery Manager</span>
            </Link>
          </div>
          <div className="flex">
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className="border-purple-400 text-purple-950 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium uppercase hover:text-purple-700"
              >
                <MdHome className="mr-2" /> home
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/pedidos"
                className="border-purple-400 text-purple-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium uppercase hover:text-purple-700"
              >
                <HiOutlineTicket className="mr-2" /> Pedidos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
