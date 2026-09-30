import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrumSection from '../components/ScrumSection';

export default function ScrumPage() {
  return (
    <div className="subpage-wrapper" style={{ background: 'var(--color-offwhite)', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <Header />
      
      <main className="subpage-main" style={{ paddingTop: '100px' }}>
        <ScrumSection />
      </main>
      
      <Footer />
    </div>
  );
}
