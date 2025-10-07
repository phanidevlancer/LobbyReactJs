import React from 'react';
import GameModeTile from '../../molecules/GameModeTile';
import Card from '../../atoms/Card';
import Icon from '../../atoms/Icon';

const GameModesSection = ({ modes, onPrivateTable }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: '16px',
      }}
    >
      {modes.map((mode) => (
        <GameModeTile key={mode.label} {...mode} />
      ))}
    </div>
    <Card
      as="button"
      type="button"
      padding="14px 18px"
      radius="18px"
      style={{
        border: '1px solid rgba(148, 163, 184, 0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        background: '#22474e',
        color: '#e2e8f0',
        fontWeight: 700,
        cursor: 'pointer',
      }}
      onClick={onPrivateTable}
    >
      <Icon name="image" size={22} style={{ color: 'rgba(148, 163, 184, 0.75)' }} />
      <span>Private Table</span>
    </Card>
  </div>
);

export default GameModesSection;
