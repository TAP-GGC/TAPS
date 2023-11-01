import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const FabButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {showButton && (
        <Fab
          color="primary"
          aria-label="Scroll to top"
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '160px',
            right: '40px',
            backgroundColor: '#960000', // Make the background transparent
            boxShadow: 'none', // Remove the default shadow
            transform: 'rotate(45deg)', // Rotate the button by 45 degrees
            color: 'white',
          }}
        >
          <KeyboardArrowUpIcon
            style={{
              transform: 'rotate(-45deg)', // Counter-rotate the icon to make it upright
            }}
          />
        </Fab>
      )}
       {showButton && (
        <p
          style={{
            position: 'fixed',
            bottom: '130px', // Adjust this value as needed
            right: '20px', // Align with the FAB button
            color: 'primary',
          }}
        >
          Top of Page
        </p>
       )}
    </div>
  );
};

export default FabButton;
