import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Router from './components/Router';
export default function App() {
  return (
    <div className='flex h-screen flex-col justify-between'>
      <header className='sticky top-0 z-30 bg-opacity-70 backdrop-blur-sm'>
        <Navbar />
      </header>
      <main className='relative'>
        <Router />
      </main>
      <footer className='bottom-0'>
        <Footer />
      </footer>
    </div>
  );
}
