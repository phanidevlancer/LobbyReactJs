import React from 'react';
import PlayerSummary from '../../molecules/PlayerSummary';
import BalancePill from '../../molecules/BalancePill';
import Card from '../../atoms/Card';

const HeaderBar = ({ player }) => (
  <Card
    padding="16px 20px"
    radius="0"
    style={{
      position: 'sticky',
      top: 0,
      zIndex: 30,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: '#032146',
      backdropFilter: 'blur(10px)',
      border: 'none',
    }}
  >
    <PlayerSummary
      name={player.name}
      subtitle={`${player.tier} (${player.level})`}
      avatar={player.avatar}
      borderColor={player.borderColor}
    />
    <BalancePill amount={player.balance} />
  </Card>
);

export default HeaderBar;
