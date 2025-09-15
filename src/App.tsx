import { useEffect, useState } from 'react'
import './App.css'
import SectionsRenderer from './components/section-renderer';
import { sectionsData } from './components/sections-data';
import { dataStructuresData } from './pages/data-structures-data';
import { objectOrientedData } from './pages/object-oriented-data';
import { lambdaData } from './pages/lambda-data';
import { multithreadingData } from './pages/multithreading-data';
import { reactData } from './pages/react-data';

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

  const subMenu: SubMenu[] = [
    ...dataStructuresData.map(section => ({
      id: section.id,
      title: section.title
    })),
    ...objectOrientedData.map(section => ({
      id: section.id,
      title: section.title
    })),
    ...lambdaData.map(section => ({
      id: section.id,
      title: section.title
    })),
    ...multithreadingData.map(section => ({
      id: section.id,
      title: section.title
    })),
    ...reactData.map(section => ({
      id: section.id,
      title: section.title
    }))];

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
          <SectionsRenderer sections={sectionsData} isMobile={isMobile} />
        </div>
      </section>
    </>
  )
}
