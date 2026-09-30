import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrgChartSection from '../components/OrgChartSection';
import TeamSection from '../components/TeamSection';

export default function OrganizacionPage() {
  return (
    <div className="subpage-wrapper" style={{ background: 'var(--color-offwhite)', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <Header />
      
      <main className="subpage-main" style={{ paddingTop: '100px' }}>
        <OrgChartSection />
        <TeamSection />
      </main>
      
      <Footer />
    </div>
  );
}
