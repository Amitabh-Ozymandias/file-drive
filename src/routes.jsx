import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Upload from './pages/Upload';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  );
};

export default RoutesComponent;
