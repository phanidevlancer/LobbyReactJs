import React from 'react';
import Card from '../../atoms/Card';

const formatHeight = (height) => {
  if (!height && height !== 0) {
    return undefined;
  }

  return typeof height === 'number' ? `${height}px` : height;
};

const GameModeTile = ({ label, image, height }) => {
  const formattedHeight = formatHeight(height) || '116px';

  return (
    <Card
      padding="0"
      radius="18px"
      style={{
        height: formattedHeight,
        overflow: 'hidden',
        background: '#22474e',
        border: '1px solid rgba(148, 163, 184, 0.08)',
        boxShadow: '0 12px 32px rgba(8, 47, 73, 0.35)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {image ? (
        <img
          src={image}
          alt={label || 'Game mode'}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <span style={{ color: '#cbd5f5', fontWeight: 600, fontSize: '0.95rem' }}>{label}</span>
      )}
    </Card>
  );
};

export default GameModeTile;
