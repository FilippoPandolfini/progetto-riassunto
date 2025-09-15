import { useEffect, useState } from 'react'
import './App.css'
import SectionsRenderer from './components/section-renderer';
import { sectionsData } from './components/sections-data';
import { dataStructuresData } from './pages/data-structures-data';
import { objectOrientedData } from './pages/object-oriented-data';
import { lambdaData } from './pages/lambda-data';
import { multithreadingData } from './pages/multithreading-data';
import { reactData } from './pages/react-data';
import { databaseData } from './pages/database-data';
import { networkingData } from './pages/networking-data';
import { metadataData } from './pages/metadata-data';
import { introduzioneData } from './introduzione-data';
import { title } from 'process';
import { javavstypeData } from './pages/javavstype-data';

interface MenuItem {
  id: string;
  title: string;
}

interface SubMenu {
  id: string;
  title: string;
}

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [activePanel, setActivePanel] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>(window.location.pathname);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPage(path);
  };

  useEffect(() => {
    const handlePopState = () => setCurrentPage(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      const sections = sectionsData.map(section => section.id);
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = 'hero';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const absoluteTop = window.scrollY + rect.top;
          const absoluteBottom = absoluteTop + rect.height;
          if (scrollPosition >= absoluteTop && scrollPosition < absoluteBottom) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (isMobile) setMenuOpen(false);
    }
  }

  const menuItems: MenuItem[] = sectionsData.map(section => ({
    id: section.id,
    title: section.title
  }));

  const datasets = [
    dataStructuresData,
    objectOrientedData,
    lambdaData,
    multithreadingData,
    reactData,
    javavstypeData,
    databaseData,
    networkingData,
    metadataData
  ];

  const subMenu: SubMenu[] = datasets.flatMap(dataset =>
    dataset.map(section => ({
      id: section.id,
      title: section.title
    }))
  );

  return (
    <>
      <header className='navbar'>
        <div className='navbar-container'>
          <div className='logo'>
            <img
              src='public/images/logo.png'
              alt='logo'
              style={{ cursor: "pointer" }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
            <p>&lt;Progetto riassunto&gt;</p>
          </div>
          {/* Hamburger icon */}
          {isMobile && (
            <button
              className={`menu-hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>)}

          {/* Menu list */}
          <nav className={`menu-list ${menuOpen || !isMobile ? 'active' : ''}`}>
            {menuItems.map(item => (
              <button
                className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
                key={item.id}
                onClick={() => scrollToSection(item.id)}
              >
                {item.title}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero">
        <div className='hero-content'>
          <div className='introduzione'>
            <h2>{introduzioneData.title}</h2>
            <h3>{introduzioneData.subtitle}</h3>
            <ul>
              {introduzioneData.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <p>{introduzioneData.note}</p>
          </div>
          <SectionsRenderer sections={sectionsData} isMobile={isMobile} />
        </div>
      </section>

      <footer className='footer'>
        <p>Progetto riassunto a cura di Filippo Pandolfini. Finito di definire il 15 settembre 2025. Aperto a suggerimenti o richieste.</p>
        <div className='contatto'>
          <a onClick={() => window.location.href = 'www.linkedin.com/in/filippo-pandolfini'}>
            LinkedIn
          </a>
          <a onClick={() => window.location.href = 'https://github.com/FilippoPandolfini?tab=repositories'}>
            GitHub
          </a>
          <a
            onClick={() => window.location.href = 'mailto:pandolfini.filippo@gmail.com'}>
            Contact
          </a>
        </div>
      </footer>
    </>
  )
}
