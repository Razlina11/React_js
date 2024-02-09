import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="cal">
      <header className="cal-head">
        <h1>Simple Calculator</h1>
      </header>
      <main>
        <Calculator />
      </main>
      <footer className="cal-foot">
        <b>&copy; Simple Calculator - Developed by: Razlina 🙂</b>

      </footer>
    </div>
  );
}

export default App;
