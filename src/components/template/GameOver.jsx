import React, { useState } from 'react';
import Flex from '../layout/Flex'
import BtnPrimary from '../layout/BtnPrimary'
import Menu from './Menu'

function GameOver({ restartGame, message }) {
  const [showGameBoard, setShowGameBoard] = useState(false)
  const handleClick = ()=>{
    setShowGameBoard(true)
  }

  if (showGameBoard){
    return <Menu/>
  }
    return (
        <div className="game-over">
          <Flex item={'center'} direction={'column'} gaps={'15px'}>
            <h1 className='H1-title'>{message}</h1>
         <BtnPrimary text={'Jogar Novamente'} onClick={handleClick}/>
         </Flex>
        </div>
    );
}

export default GameOver;
