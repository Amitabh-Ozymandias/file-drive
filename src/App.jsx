import React from 'react';
import Navbar from './components/Navbar';
import RoutesComponent from './routes';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <RoutesComponent />
      </main>
    </div>
  );
}

export default App;
