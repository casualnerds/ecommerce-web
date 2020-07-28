import React from 'react';

import './App.css';
import { Home } from './pages/Home/Home.page';
import { Navbar } from './modules/Navbar/Navbar.module';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
