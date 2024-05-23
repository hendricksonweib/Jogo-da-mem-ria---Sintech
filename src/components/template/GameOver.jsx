import React, { useState } from 'react';
import BtnPrimary from '../layout/BtnPrimary';
import Flex from '../layout/Flex';
import Menu from './Menu';

function GameOver() {
  const [showGameBoard, setShowGameBoard] = useState(false);

  const handleClick = () => {
    setShowGameBoard(true);
  };

  if (showGameBoard) {
    return <Menu />;
  }

  return (
    <div>
      <Flex item={'center'} direction={'column'} gaps={'15px'}>
        <h1 className='H1-title'>Parabéns!</h1>
        <BtnPrimary text={'Jogar Novamente'} onClick={handleClick} />
      </Flex>
    </div>
  );
}

export default GameOver;
