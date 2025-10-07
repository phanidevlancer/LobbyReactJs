import React from 'react';
import Avatar from '../../atoms/Avatar';

const PlayerSummary = ({ name, subtitle, avatar, borderColor }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <Avatar src={avatar} alt={`${name} avatar`} size={56} borderColor={borderColor} />
    <div>
      <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#f8fafc' }}>{name}</div>
      <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{subtitle}</div>
    </div>
  </div>
);

export default PlayerSummary;
