import React from 'react';
import FeatureCard from '../../molecules/FeatureCard';

const FeatureGrid = ({ cards }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gap: '16px',
    }}
  >
    {cards.map((card) => (
      <FeatureCard key={card.image} {...card} />
    ))}
  </div>
);

export default FeatureGrid;
