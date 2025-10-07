import React from 'react';
import Icon from '../../atoms/Icon';

const NavItem = ({ icon, label, active }) => (
  <button
    type="button"
    style={{
      background: 'none',
      border: 'none',
      color: active ? '#facc15' : 'var(--color-text-muted)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      fontSize: '0.75rem',
      fontWeight: 600,
      cursor: 'pointer',
    }}
  >
    <Icon name={icon} size={24} />
    <span>{label}</span>
  </button>
);

export default NavItem;
