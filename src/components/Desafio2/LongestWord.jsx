
import React from 'react';

const verifica = (text) => {
    const arrayPalavras = text.split(' ');
    return arrayPalavras.sort((a,b) => b.length - a.length )[0];

}

const LongestWord = ({ children }) => {
    return <strong>{verifica(children)}</strong>
}

export default LongestWord;