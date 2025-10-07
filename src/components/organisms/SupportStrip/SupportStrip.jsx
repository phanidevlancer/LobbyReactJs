import React from 'react';
const SupportStrip = ({ image, alt = 'Platform highlights' }) => {
  if (!image) {
    return null;
  }

  return (
    <img
      src={image}
      alt={alt}
      style={{ width: '100%', display: 'block', borderRadius: '18px' }}
    />
  );
};

export default SupportStrip;
