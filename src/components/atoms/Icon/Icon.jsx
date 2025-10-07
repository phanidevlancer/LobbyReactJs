import React from 'react';

const Icon = ({ name, label, size = 24, className = '', style, ...props }) => {
  const calculatedStyle = {
    fontSize: typeof size === 'number' ? `${size}px` : size,
    ...style,
  };

  return (
    <span
      className={`material-icons ${className}`.trim()}
      role={label ? 'img' : 'presentation'}
      aria-label={label || undefined}
      style={calculatedStyle}
      {...props}
    >
      {name}
    </span>
  );
};

export default Icon;
