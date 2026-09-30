import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IDEF0Section from '../components/IDEF0Section';

export default function IDEF0Page() {
  return (
    <div className="subpage-wrapper" style={{ background: 'var(--color-offwhite)', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <Header />
      
      <main className="subpage-main" style={{ paddingTop: '100px' }}>
        <IDEF0Section />
      </main>
      
      <Footer />
    </div>
  );
}
