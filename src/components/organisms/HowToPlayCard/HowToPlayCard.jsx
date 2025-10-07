import React from 'react';

const HowToPlayCard = ({ image, alt = 'How to play' }) => {
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
        paddingTop: `${(456 / 1312) * 100}%`,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

export default HowToPlayCard;
