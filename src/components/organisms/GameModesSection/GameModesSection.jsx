import React from 'react';
import GameModeTile from '../../molecules/GameModeTile';
import Card from '../../atoms/Card';
import Icon from '../../atoms/Icon';

const GameModesSection = ({ modes, onPrivateTable }) => {
  const tallTileHeight = '200px';
  const shortTileHeight = '70px';
  const columnGap = '16px';

  const columnOneModes = modes.filter((_, index) => index % 2 === 0);
  const columnTwoModes = modes.filter((_, index) => index % 2 !== 0);

  const getHeight = (index, heights) => heights[index % heights.length];

  // Alternating height pattern per column (repeats every two rows)
  const columnOneHeights = [tallTileHeight, shortTileHeight];
  const columnTwoHeights = [shortTileHeight, tallTileHeight];

  const renderColumn = (items, heightsPattern) =>
    items.map((mode, index) => {
      const height = getHeight(index, heightsPattern);
      return (
       <div
        key={mode.label || index}
        style={{ height, width: '100%', marginBottom: columnGap }} // 👈 fix invalid "height,width"
      >
          <GameModeTile {...mode} height={height} />
        </div>
      );
    });

  return (
    <div style={{ display: 'flex',flex : 1, flexDirection: 'column' }}>
      <div
        style={{
          flexDirection: 'row',
          display: 'flex',
          flex : 1,
          overflow: 'hidden',
          gap : columnGap,
        }}
      >
        
       <div style={{ display: 'flex', flexDirection: 'column', flex : 1 }}>
          {renderColumn(columnOneModes, columnOneHeights)}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex : 1 }}>
          {renderColumn(columnTwoModes, columnTwoHeights)}
        </div>

         
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
};

export default GameModesSection;
