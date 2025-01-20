import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { MainLayout } from './layout/MainLayout';
import { Home } from './pages/Home';
import { Camps } from './pages/Camps';
import { Tickets } from './pages/Tickets';
import { PracticalInfo } from './pages/PracticalInfo';
import { Login } from './pages/Login';
import NotFound from './pages/NotFound';
import { LineUp } from './pages/Lineup';
import { Program } from './pages/Program';
import { MinSide } from './pages/MinSide';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="camps" element={<Camps />} />
        <Route path="tickets" element={<Tickets />} />
        <Route path="practical-info" element={<PracticalInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/minside" element={<MinSide />} />
        <Route path="line-up" element={<LineUp />} />
        <Route path="program" element={<Program />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
