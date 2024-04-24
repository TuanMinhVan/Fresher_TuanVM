import { useEffect, useState } from 'react';

/**
 * The BackToTopButton component in TypeScript React displays a button that scrolls the window to the
 * top when clicked after scrolling down 100px.
 */
const BackToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={`back-to-top ${showButton ? 'visible' : 'hidden'}`}
      onClick={scrollToTop}>
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default BackToTopButton;
