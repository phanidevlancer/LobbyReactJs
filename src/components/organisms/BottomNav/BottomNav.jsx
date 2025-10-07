import React from 'react';
import Card from '../../atoms/Card';
import NavItem from '../../molecules/NavItem';

const BottomNav = ({ items }) => (
  <Card
    padding="12px 24px"
    radius="24px 24px 0 0"
    style={{
      position: 'sticky',
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(148, 163, 184, 0.12)',
      background: 'rgba(15, 23, 42, 0.85)',
    }}
  >
    {items.map((item) => (
      <NavItem key={item.label} {...item} />
    ))}
  </Card>
);

export default BottomNav;
