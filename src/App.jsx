import React from 'react';
import Image from './Components/Image';
import "./Styles/Responsive-design.css";
import './App.css';

function App() {
  return (
    <>
      <div className="dashboard-container">
        <header className="header">
          <h1>Dashboard</h1>
        </header>
        <main className="main">
          <Image />
        </main>
        <footer className="footer">
          <p>&#169; GraphSML</p>
          <p>Galeria Temporal</p>
        </footer>
      </div>
    </>
  );
}

export default App;