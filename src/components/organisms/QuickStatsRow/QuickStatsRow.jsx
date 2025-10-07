import React from 'react';
import QuickStatCard from '../../molecules/QuickStatCard';

const QuickStatsRow = ({ stats }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      gap: '12px',
    }}
  >
    {stats.map((stat) => (
      <QuickStatCard key={stat.title} {...stat} />
    ))}
  </div>
);

export default QuickStatsRow;
