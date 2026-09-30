import { Routes, Route } from 'react-router-dom';
import ScrollHandler from './components/ScrollHandler';
import HomePage from './pages/HomePage';
import CienciaTecnologiaPage from './pages/CienciaTecnologiaPage';
import GestionTecnologiasPage from './pages/GestionTecnologiasPage';
import MisionVisionPage from './pages/MisionVisionPage';
import OrganizacionPage from './pages/OrganizacionPage';
import MBTIPage from './pages/MBTIPage';
import ScrumPage from './pages/ScrumPage';
import IDEF0Page from './pages/IDEF0Page';
import BPMNPage from './pages/BPMNPage';

export default function App() {
  return (
    <>
      <ScrollHandler />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ciencia-tecnologia-innovacion" element={<CienciaTecnologiaPage />} />
        <Route path="/gestion-tecnologias" element={<GestionTecnologiasPage />} />
        <Route path="/mision-vision" element={<MisionVisionPage />} />
        <Route path="/organizacion" element={<OrganizacionPage />} />
        <Route path="/mbti" element={<MBTIPage />} />
        <Route path="/scrum" element={<ScrumPage />} />
        <Route path="/idef-0" element={<IDEF0Page />} />
        <Route path="/bpmn" element={<BPMNPage />} />
      </Routes>
    </>
  );
}
