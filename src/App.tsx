import React from 'react';
import Navbar from './component/Navbar';
import Filters from './component/Filters/Filters';
import './assets/css/style.css';

function App() {
  return (
    <section className="app">
      <Navbar />
      <Filters />
    </section>
  );
}

export default App;
