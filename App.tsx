
import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import AIChatWidget from './components/AIChatWidget';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '#/': return <Home />;
      case '#/about': return <About />;
      case '#/products': return <Products />;
      case '#/services': return <Services />;
      case '#/portfolio': return <Portfolio />;
      case '#/contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <Layout>
      {renderPage()}
      <AIChatWidget />
    </Layout>
  );
};

export default App;
