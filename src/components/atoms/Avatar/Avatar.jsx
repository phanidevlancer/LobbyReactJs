import React from 'react';

const Avatar = ({
  src,
  alt,
  size = 48,
  borderColor = '#f59e0b',
  badge,
  className = '',
  ...props
}) => {
  const dimension = typeof size === 'number' ? `${size}px` : size;
  const wrapperStyle = {
    width: dimension,
    height: dimension,
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
    border: borderColor ? `2px solid ${borderColor}` : 'none',
  };

  const badgeStyle = badge
    ? {
        position: 'absolute',
        top: '-6px',
        left: '-6px',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: badge.backgroundColor || '#f97316',
        color: badge.color || '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '11px',
        fontWeight: 700,
        border: `2px solid ${badge.borderColor || 'var(--color-card-dark)'}`,
      }
    : undefined;

  return (
    <div className={`avatar ${className}`.trim()} style={wrapperStyle} {...props}>
      <img src={src} alt={alt} style={imageStyle} />
      {badge ? <span style={badgeStyle}>{badge.content}</span> : null}
    </div>
  );
};

export default Avatar;
