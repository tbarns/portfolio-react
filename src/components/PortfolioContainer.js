import { useState } from 'react';
import Navigation from './Navigation';
import Home from './pages/Resume';
import Bio from './pages/Bio';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './Footer';
//resume page needed
//contact page needed

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Portfolio');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Home />;
    }
    if (currentPage === 'about') {
      return <Bio />;
    }
    if (currentPage === 'Portfolio') {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer/>
    </div>
  );
}
