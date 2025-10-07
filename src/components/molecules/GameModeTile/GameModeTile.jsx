import React from 'react';
import Card from '../../atoms/Card';
import Icon from '../../atoms/Icon';

const GameModeTile = ({ label, icon = 'image' }) => (
  <Card
    padding="18px 12px"
    radius="18px"
    style={{
      height: '116px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      background: '#22474e',
      border: '1px solid rgba(148, 163, 184, 0.08)',
      boxShadow: '0 12px 32px rgba(8, 47, 73, 0.35)',
    }}
  >
    <Icon name={icon} size={38} style={{ color: 'rgba(148, 163, 184, 0.65)' }} />
    <span style={{ color: '#cbd5f5', fontWeight: 600, fontSize: '0.95rem' }}>{label}</span>
  </Card>
);

export default GameModeTile;
