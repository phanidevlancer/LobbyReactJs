import React from 'react';
import Icon from '../../atoms/Icon';

const SupportMetric = ({ icon, label, tone }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
      color: 'var(--color-text-muted)',
    }}
  >
    <Icon name={icon} size={20} style={{ color: tone }} />
    <span>{label}</span>
  </div>
);

export default SupportMetric;
