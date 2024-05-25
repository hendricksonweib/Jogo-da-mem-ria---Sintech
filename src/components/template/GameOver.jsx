import React, { useState } from 'react';
import Flex from '../layout/Flex';
import BtnPrimary from '../layout/BtnPrimary';
import Ranking from './Ranking';
import { isMobile } from 'react-device-detect';

function GameOver({ message }) {
  const [showMenu, setShowMenu] = useState(false);
  const [gameOver, setGameOver] = useState(false); // Adicionando estado para controlar se o jogo terminou

  const handleClick = () => {
    setShowMenu(true);
    setGameOver(true); // Define o estado de jogo como terminado
    window.location.reload(); // Recarrega a página
  };

  return (
    <div className="game-over">
      {!gameOver && ( // Renderiza somente se o jogo não tiver terminado
        isMobile ? (
          <Flex item={'center'} direction={'column'} gaps={'15px'}>
            <Ranking />
            <h1 className='H1-title'>{message}</h1>
            <BtnPrimary text={'Jogar Novamente'} onClick={handleClick} />
          </Flex>
        ) : (
          <Flex item={'center'} gaps={'15px'}>
            <Ranking />
            <Flex item={'center'} direction={'column'} gaps={'15px'}>
              <h1 className='H1-title'>{message}</h1>
              <BtnPrimary text={'Jogar Novamente'} onClick={handleClick} />
            </Flex>
          </Flex>
        )
      )}
      {showMenu && <Menu />}
    </div>
  );
}

export default GameOver;
