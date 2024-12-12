import React from 'react';
import Navbar from './components/Navbar'; // เพิ่ม Navbar Component
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container mt-4">
        <h1>Welcome to restaurants Chiang Mai</h1>
        <p>ร้านอาหารอร่อยที่สุดในเชียงใหม่ ??</p>
      </main>
      
      <main className="container mt-4">
        <div className="row">
            <Home />
        </div>
      </main>
      <br /><br />
      <main className="container mt-4">
        <div className="row">
            <Menu />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

