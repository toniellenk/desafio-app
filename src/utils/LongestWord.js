
const Get = (text) => {
    const arrayPalavras = text.split(' ');
    return arrayPalavras.sort((a, b) => b.length - a.length)[0];

}

const GetInfo = (frase) => {
    const arrayPalavras = frase.split(' ').filter(p => p.length > 0);
    return arrayPalavras.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? -1: 1).map(p => {
        return {
            palavra: p,
            qtdLetras: p.length
        }
    });
};

export const LongestWord = {
    Get,
    GetInfo
}