import React, { useState } from 'react';
import './Desafio2.css';
import { LongestWord } from '../../utils/LongestWord';
import { format } from 'date-fns'


const Desafio2Hook = () => {
    const [resultado, setResultado] = useState();
    const [texto, setTexto] = useState('');

    const handleText = (event) => {
        const { value } = event.target;
        setTexto(value);
    }

    return (
        <div className='container'>
            <label>What is the longest word ?</label>
            <input onChange={handleText} className='inputText' placeholder='Digite a frase aqui' type="text" name="name" />
            {resultado && !texto && <label className='error'>Favor informar uma frase!</label>}
            {resultado && texto && <label className='resultado'>
                The longest word is <strong>{LongestWord.Get(texto)}</strong>
            </label>}

            <button className='button' onClick={() => setResultado(!resultado)}>
                Show
            </button>
            <div className='informacoes'>
                <h3>Informações</h3>
                {LongestWord.GetInfo(texto).map((f, index) => <span key={index} className='letras'>
                    <strong>{f.palavra}</strong>{`: ${f.qtdLetras} letra(s)`}
                </span>)}
            </div>
            <label className='dataHora'>{format(new Date(), 'dd/MM/yyyy HH:mm')}</label>
        </div>
    );
}


export default Desafio2Hook;