import React, { useState } from 'react';
import './Desafio2.css';
import LongestWord from './LongestWord';
import { format } from 'date-fns'


const Desafio2 = () => {
    // Declare a new state variable, which we'll call "count"
    const [resultado, setResultado] = useState();
    const [texto, setTexto] = useState('');



    return (
        <div className='container'>
            <label>What is the longest word ?</label>
            <input onChange={(event) => setTexto(event.target.value)} className='inputText' placeholder='Digite a frase aqui' type="text" name="name" />
            {resultado && !texto && <label className='error'>Favor informar uma frase!</label>}
            {resultado && texto && <label className='resultado'>The longest word is <LongestWord>{texto}</LongestWord></label>}

            <button className='button' onClick={() => setResultado(!resultado)}>
                Show
            </button>

            <label className='dataHora'>{format(new Date(), 'dd/MM/yyyy HH:mm')}</label>
        </div>
    );
}


export default Desafio2;