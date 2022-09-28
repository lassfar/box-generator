import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from 'views/Home';
import MainLayout from 'components/layouts/MainLayout';

function App() {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
}

export default App;
