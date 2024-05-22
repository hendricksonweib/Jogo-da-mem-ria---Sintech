import React from 'react';

const CenteredContainer = ({ item,gaps, direction,children }) => {
  const FlexStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems:item,
    flexDirection: direction,
    gap:gaps
  }

  return (
    <div style={FlexStyle}>
      {children}
    </div>
  );
}

export default CenteredContainer;
