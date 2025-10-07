import React from 'react';
import Icon from '../../atoms/Icon';

const BalancePill = ({ amount, onAdd }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '6px 12px',
      borderRadius: '999px',
      backgroundColor: 'rgba(148, 163, 184, 0.25)',
    }}
  >
    <span style={{ fontWeight: 700, color: '#facc15', letterSpacing: '0.5px' }}>{amount}</span>
    <button
      type="button"
      onClick={onAdd}
      style={{
        width: '28px',
        height: '28px',
        borderRadius: '50%',
        border: 'none',
        background: 'linear-gradient(135deg, #22c55e, #16a34a)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        cursor: 'pointer',
      }}
    >
      <Icon name="add" size={20} />
    </button>
  </div>
);

export default BalancePill;
