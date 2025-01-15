import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';

export const MainLayout = () => {
  return (
    <div className="main-layout">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet /> 
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
