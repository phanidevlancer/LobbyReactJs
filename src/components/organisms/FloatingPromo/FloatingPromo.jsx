import React from 'react';
import Card from '../../atoms/Card';
import Icon from '../../atoms/Icon';

const FloatingPromo = ({ image, onClose }) => (
  <div
    style={{
      position: 'fixed',
      bottom: '100px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '210px',
      zIndex: 35,
    }}
  >
    <Card
      padding="0"
      radius="28px"
      style={{ position: 'relative', overflow: 'hidden', background: 'rgba(15, 23, 42, 0.8)' }}
      shadow="0 18px 40px rgba(8, 47, 73, 0.45)"
    >
      <img src={image} alt="Promo" />
      <button
        type="button"
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          width: '28px',
          height: '28px',
          borderRadius: '999px',
          background: 'rgba(15, 23, 42, 0.65)',
          border: '1px solid rgba(148, 163, 184, 0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#e2e8f0',
          cursor: 'pointer',
        }}
      >
        <Icon name="close" size={16} />
      </button>
    </Card>
  </div>
);

export default FloatingPromo;
