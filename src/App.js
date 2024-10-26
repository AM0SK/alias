import React from 'react';
import './App.css';
import { FaGamepad } from 'react-icons/fa';
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="logo">
            <FaGamepad />
            <span>Alias online</span>
          </div>
          <nav>
            <a href="#what-is-it">What is it</a>
            <a href="#advantages">Advantages</a>
            <a href="#trending">Trending</a>
          </nav>
          <button className="login-btn">Log in</button>
        </div>
      </header>
      
      <main>
        <section className="hero">
          <div className="container">
            <h1>Alias online</h1>
          </div>
          <div className="hero-spline">
            <Spline scene="https://prod.spline.design/T1kVW9-7Q4JZO5MI/scene.splinecode" />
            <div className="spline-overlay"></div>
          </div>
        </section>
        
        <section id="what-it-is">
          <div className="container">
            <h2>What it is</h2>
            {/* Добавьте содержимое */}
          </div>
        </section>
        
        <section id="advantages">
          <div className="container">
            <h2>Advantages</h2>
            {/* Добавьте содержимое */}
          </div>
        </section>
        
        <section id="trending">
          <div className="container">
            <h2>Trending</h2>
            {/* Добавьте содержимое */}
          </div>
        </section>
      </main>
      
      <footer>
        <div className="container">
          <div className="logo">
            <FaGamepad />
            <span>Alias online</span>
          </div>
          <nav>
            <a href="#what-is-it">What is it</a>
            <a href="#advantages">Advantages</a>
            <a href="#trending">Trending</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
