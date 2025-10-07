import React from 'react';

const FeatureCard = ({ image, overlay, alt = '' }) => (
  <div
    style={{
      position: 'relative',
      borderRadius: '18px',
      overflow: 'hidden',
      height: '116px',
    }}
  >
    {overlay ? (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: overlay,
          zIndex: 1,
        }}
      />
    ) : null}
    <img
      src={image}
      alt={alt}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
      }}
    />
  </div>
);

export default FeatureCard;
