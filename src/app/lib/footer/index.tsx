import React from 'react';

const Footer = () => {
   // Define styles for the footer container
   const footerStyle = {
    display: 'flex', // Use flexbox for layout
    justifyContent: 'space-between', // Space between items for horizontal alignment
    alignItems: 'center', // Center items vertically
    height: '100px', // Set a fixed height for the footer
    background: '#D9D9D9', // Background color for the footer
    color: 'black', // Text color
    padding: '0 20px', // Add padding to create space between content and edges
  };

  // Define styles for text elements within the footer
  const textSize: React.CSSProperties = {
    fontSize: '16px', // Adjust the font size as needed
    flex: 1, // Expand the text elements equally
    textAlign: 'center', // Center the text horizontally
  };

  return (
    <div style={footerStyle}>
      <p style={textSize}>TAPS Club &copy; GGC</p>
      <p style={textSize}>Copyright &copy; {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
