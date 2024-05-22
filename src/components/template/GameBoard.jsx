import React, { useState, useEffect } from 'react';
import Card from '../layout/Card';
import GameOver from './GameOver';

function GameBoard() {
    const cards = [
        "TV",
        "TV",
        "VT",
        "VT",
        "hbird",
        "hbird",
        "name",
        "name",
        "seal",
        "seal",
        "tracks",
        "tracks"
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
                flipped: false,
                matched: false
            };
        })
    );

    const [flippedCards, setFlippedCards] = useState([]);
    const [gameOver, setGameOver] = useState(false);

    const handleClick = (name, index) => {
        let currentCard = {
            name,
            index
        };

        //update card is flipped
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
            setTimeout(() => {
                check();
            }, 750);
        }
    };

    const check = () => {
        let updateCards = [...cardList];
        if (
            flippedCards[0].name === flippedCards[1].name &&
            flippedCards[0].index !== flippedCards[1].index
        ) {
            updateCards[flippedCards[0].index].matched = true;
            updateCards[flippedCards[1].index].matched = true;
            isGameOver(updateCards);
        } else {
            updateCards[flippedCards[0].index].flipped = false;
            updateCards[flippedCards[1].index].flipped = false;
        }
        setCardList(updateCards);
        setFlippedCards([]);
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
                    flipped: false,
                    matched: false
                };
            })
        );

        setFlippedCards([]);
        setGameOver(false);
    };

    return (
        <div className="game-board">
            {!gameOver &&
                cardList.map((card, index) => (
                    <Card
                        key={index}
                        id={index}
                        name={card.name}
                        flipped={card.flipped}
                        matched={card.matched}
                        clicked={flippedCards.length === 2 ? () => {} : () => handleClick(card.name, card.id)}
                    />
                ))}
            {gameOver && <GameOver restartGame={restartGame} />}
        </div>
    )
}

export default GameBoard;
