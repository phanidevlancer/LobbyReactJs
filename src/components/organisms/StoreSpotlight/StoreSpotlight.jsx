import React from 'react';
const StoreSpotlight = ({ image, alt = 'Poker store highlight' }) => {
  if (!image) {
    return null;
  }

  return (
    <div
      role="img"
      aria-label={alt}
      style={{
        borderRadius: '24px',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 18px 38px rgba(6, 95, 70, 0.32)',
        width: '100%',
        paddingTop: `${(320 / 1312) * 100}%`,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

export default StoreSpotlight;
