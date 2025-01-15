import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { MainLayout } from './layout/MainLayout';
import { Home } from './pages/Home';
import { Events } from './pages/Events';
import { Camps } from './pages/Camps';
import { Tickets } from './pages/Tickets';
import { PracticalInfo } from './pages/PracticalInfo';
import { Login } from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="events" element={<Events />} />
        <Route path="camps" element={<Camps />} />
        <Route path="tickets" element={<Tickets />} />
        <Route path="practical-info" element={<PracticalInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
