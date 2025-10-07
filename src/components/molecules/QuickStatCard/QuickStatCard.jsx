import React from 'react';
const QuickStatCard = ({ title, subtitle, image, alt = title, accent = 'rgba(15, 23, 42, 0.65)' }) => (
  <div style={{ textAlign: 'center' }}>
    <div
      style={{
        width: '72px',
        height: '72px',
        borderRadius: '999px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 10px',
        overflow: 'hidden',
      }}
    >
      {image ? (
        <img
          src={image}
          alt={alt}
          style={{ width: '80%', height: '80%', objectFit: 'contain', display: 'block' }}
        />
      ) : null}
    </div>
    <div style={{ fontSize : 10, color: '#f8fafc' }}>{title}</div>
    <div style={{ fontWeight: 600,fontSize : 14, color: '#eabf69' }}>{subtitle}</div>
  </div>
);

export default QuickStatCard;
