import React from 'react';
import Navbar from './component/Navbar';
import Filters from './component/Filters/Filters';
import ShapesColorsGrid from './component/ShapesColorsGrid';
import './assets/css/style.css';

function App() {
  return (
    <section className="app">
      <Navbar />
      <Filters />
      <ShapesColorsGrid />
    </section>
  );
}

export default App;
