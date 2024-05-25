import React, { useState, useEffect } from 'react';
import Card from '../layout/Card';
import GameOver from './GameOver';

function GameBoard() {
    const cards = [
        "Buness",
        "Buness",
        "Idea",
        "Idea",
        "Hat",
        "Hat",
        "sun",
        "sun",
        "Present",
        "Present",
        "Rocket",
        "Rocket"
    ];

    const shuffle = array => {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };

    const [cardList, setCardList] = useState(
        shuffle(cards).map((name, index) => {
            return {
                id: index,
                name: name,
                flipped: true,
                matched: false
            };
        })
    );

    const [flippedCards, setFlippedCards] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [isChecking, setIsChecking] = useState(false);
    const [isPreview, setIsPreview] = useState(true);
    const [countdown, setCountdown] = useState(45);

    useEffect(() => {
        // Vire todas as cartas para baixo após 5 segundos
        const timer = setTimeout(() => {
            setCardList(cardList.map(card => ({ ...card, flipped: false })));
            setIsPreview(false);
            startCountdown();
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    const startCountdown = () => {
        const interval = setInterval(() => {
            setCountdown(prevCountdown => {
                if (prevCountdown === 0) {
                    clearInterval(interval);
                    setGameOver(true);
                    return 0;
                }
                return prevCountdown - 1;
            });
        }, 1000);
    };

    const handleClick = (name, index) => {
        if (isChecking || isPreview) return; 

        let currentCard = {
            name,
            index
        };

        let updateCards = cardList.map(card => {
            if (card.id === index) {
                card.flipped = true;
            }
            return card;
        });

        let updateFlipped = [...flippedCards, currentCard];
        setFlippedCards(updateFlipped);
        setCardList(updateCards);

        if (updateFlipped.length === 2) {
            setIsChecking(true);
            setTimeout(() => {
                check(updateFlipped);
            }, 750);
        }
    };

    const check = (flipped) => {
        let updateCards = [...cardList];
        if (
            flipped[0].name === flipped[1].name &&
            flipped[0].index !== flipped[1].index
        ) {
            updateCards[flipped[0].index].matched = true;
            updateCards[flipped[1].index].matched = true;
            isGameOver(updateCards);
        } else {
            updateCards[flipped[0].index].flipped = false;
            updateCards[flipped[1].index].flipped = false;
        }
        setCardList(updateCards);
        setFlippedCards([]);
        setIsChecking(false);
    };

    const isGameOver = (updatedCards) => {
        let done = true;
        updatedCards.forEach(card => {
            if (!card.matched) done = false;
        });
        setGameOver(done);
    };

    const restartGame = () => {
        setCardList(
            shuffle(cards).map((name, index) => {
                return {
                    id: index,
                    name: name,
                    flipped: true,
                    matched: false
                };
            })
        );

        setFlippedCards([]);
        setGameOver(false);
        setIsChecking(false);
        setIsPreview(true); 
        setCountdown(45); 

        setTimeout(() => {
            setCardList(cardList.map(card => ({ ...card, flipped: false })));
            setIsPreview(false);
            startCountdown();
        }, 1);
    };

    return (
        <div className="game-container">
            {!gameOver && <div className="countdown">Tempo: {countdown}</div>}
            <div className="game-board">
                {!gameOver &&
                    cardList.map((card, index) => (
                        <Card
                            key={index}
                            id={index}
                            name={card.name}
                            flipped={card.flipped}
                            matched={card.matched}
                            clicked={() => handleClick(card.name, card.id)}
                        />
                    ))}
                {gameOver && <GameOver restartGame={restartGame} />}
            </div>
        </div>
    );
}

export default GameBoard;
