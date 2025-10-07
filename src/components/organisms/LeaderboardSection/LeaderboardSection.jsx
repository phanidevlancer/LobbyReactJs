import React from 'react';
import LeaderboardItem from '../../molecules/LeaderboardItem';
import Icon from '../../atoms/Icon';

const LeaderboardSection = ({ title, ctaLabel, iconSrc, entries }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {iconSrc ? (
          <img src={iconSrc} alt="Leaderboard icon" style={{ width: '28px', height: '28px' }} />
        ) : null}
        <h3 style={{ margin: 0, color: '#f8fafc', fontSize: '1.1rem' }}>{title}</h3>
      </div>
      <button
        type="button"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          background: 'none',
          border: 'none',
          color: '#eabf69',
          fontWeight: 600,
          cursor: 'pointer',
          fontSize: '0.85rem',
        }}
      >
        {ctaLabel}
        <Icon name="chevron_right" size={20} />
      </button>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {entries.map((entry, index) => (
        <LeaderboardItem key={entry.name} position={index + 1} player={entry} />
      ))}
    </div>
  </div>
);

export default LeaderboardSection;
