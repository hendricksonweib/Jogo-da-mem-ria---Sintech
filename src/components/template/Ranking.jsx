import React, { useEffect, useState } from 'react';

const Ranking = () => {
    const [ranking, setRanking] = useState([]);

    useEffect(() => {
        const savedRanking = JSON.parse(localStorage.getItem('ranking')) || [];
        savedRanking.sort((a, b) => a.tempo - b.tempo);
        setRanking(savedRanking);
    }, []);

    return (
        <div className="ranking-container">
            <h1 className='H1-title'>Ranking</h1>
            <ul>
                {ranking.map((entry, index) => (
                    <li className='Ranking' key={index}>
                        {index + 1}. {entry.nome} - {entry.tempo} segundos
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Ranking;
