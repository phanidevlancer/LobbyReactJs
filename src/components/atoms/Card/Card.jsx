import React from 'react';

const backgroundMap = {
  dark: 'var(--color-card-dark)',
  darker: 'var(--color-card-darker)',
  light: 'var(--color-card-light)',
  transparent: 'transparent',
};

const DEFAULT_SHADOW = '0 6px 18px rgba(8, 47, 73, 0.28)';

const Card = ({
  as: Component = 'div',
  variant = 'dark',
  padding = '1rem',
  radius = '16px',
  style,
  className = '',
  children,
  shadow,
  ...props
}) => {
  const background = backgroundMap[variant] || backgroundMap.dark;
  const resolvedShadow =
    shadow === undefined
      ? variant === 'transparent'
        ? null
        : DEFAULT_SHADOW
      : shadow;

  return (
    <Component
      className={`card ${className}`.trim()}
      style={{
        background,
        padding,
        borderRadius: radius,
        ...(resolvedShadow ? { boxShadow: resolvedShadow } : {}),
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Card;
