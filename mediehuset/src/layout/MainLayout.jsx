import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';

export const MainLayout = () => {
  return (
    <div className="main-layout">
      <header>
        <Navbar/>
      </header>
      <main>
      </main>
      <footer>
        <p>© 2025 Mediesuset. All rights reserved.</p>
      </footer>
    </div>
  );
};
