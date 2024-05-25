import React, { useState, useEffect } from 'react';
import '../../style/global.css';
import InputPrimary from '../layout/InputPrimary';
import BtnPrimary from '../layout/BtnPrimary';
import Flex from '../layout/Flex';
import GameBoard from './GameBoard';

function UserBoard() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            Nome: nome,
            Email: email,
            Whatsapp: whatsapp
        };

        try {
            const response = await fetch('https://api.sheetmonkey.io/form/82SuDbPYXHKNmysmPXq4f', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Dados enviados com sucesso!');
                localStorage.setItem('nome', nome);
                setIsPlaying(true);
            } else {
                console.error('Erro ao enviar dados.');
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    return (
        isPlaying ? (
            <GameBoard />
        ) : (
            <Flex item={'center'} direction={'column'} gaps={'15px'}>
                <form onSubmit={handleSubmit}>
                    <h1 className='H1-title'>Cadastre-se</h1>
                    <InputPrimary
                        type={'text'}
                        label={'Nome'}
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <InputPrimary
                        type={'email'}
                        label={'E-Mail'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputPrimary
                        type={'number'}
                        label={'Whatsapp'}
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                    />
                    <BtnPrimary text={'Jogar'} type="submit" />
                </form>
            </Flex>
        )
    );
}

export default UserBoard;
