import React from 'react';
import Avatar from '../../atoms/Avatar';
import Card from '../../atoms/Card';

const LeaderboardItem = ({ position, player }) => {
  const { name, winRate, chips, avatar, badgeColor } = player;

  return (
    <Card
      padding="12px"
      radius="16px"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        background: '#075063',
        border: '1px solid rgba(148, 163, 184, 0.08)',
      }}
    >
      <Avatar
        src={avatar}
        alt={`${name} avatar`}
        size={52}
        borderColor="transparent"
        badge={{ content: position, backgroundColor: badgeColor, borderColor: 'var(--color-card-dark)' }}
      />
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 700, color: '#f8fafc' }}>{name}</div>
        <div style={{ fontSize: '0.85rem', color: '#eabf69' }}>{`Win Rate: ${winRate}`}</div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontWeight: 700, color: '#22c55e', fontSize: '1.05rem' }}>{chips}</div>
        <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Chips
        </div>
      </div>
    </Card>
  );
};

export default LeaderboardItem;
