
import React from 'react';

const verifica = (text) => {
    const arrayPalavras = text.split(' ');
    let maiorPalavra = '';

    for (let index = 0; index < arrayPalavras.length; index++) {
        const element = arrayPalavras[index];
        if (element.length > maiorPalavra.length)
            maiorPalavra = element;
    }

    return maiorPalavra;

}

const LongestWord = ({ children }) => {
    return <strong>{verifica(children)}</strong>
}

export default LongestWord;