import React from 'react';

const ResponsibleNotice = ({ message }) => (
  <p
    style={{
      textAlign: 'center',
      color: '#9c9d9f',
      fontSize: '0.7rem',
      lineHeight: 1.6,
      margin: '0 0 20px',
    }}
  >
    {message}
  </p>
);

export default ResponsibleNotice;
