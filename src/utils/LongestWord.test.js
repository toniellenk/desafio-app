import React from "react";
import { render, screen } from "@testing-library/react";
import { LongestWord } from "./LongestWord";

test('Deve retornar a maior palavra', () => {
    render(<span>{LongestWord.Get('Olá, seja bem vindo ao desafio')}</span>);
    const maiorPalavra = screen.queryByText(/desafio/i);
    expect(maiorPalavra).toBeInTheDocument();
})

test('Deve retornar "hello", desconsiderando o espaço no início.', () => {
    const result = LongestWord.Get('  hello world');
    expect(result).toBe('hello');
})

test('Deve retornar a quantidade de letras das palavras', () => {
    render(<div>{LongestWord.GetInfo('Olá, seja bem vindo ao desafio').map((f, index) => <span key={index}>
        {`${f.palavra}: ${f.qtdLetras} letras`}</span>)}</div>);

    expect(screen.getByText(/desafio: 7 letras/i)).toBeInTheDocument();
    expect(screen.getByText(/vindo: 5 letras/i)).toBeInTheDocument();
    expect(screen.getByText(/seja: 4 letras/i)).toBeInTheDocument();
})

test('Deve retornar palavras em ordem decrescente', () => {
    const result = LongestWord.GetInfo('Olá, seja bem vindo ao desafio');

    expect(result[0].palavra).toBe('vindo');
    expect(result[1].palavra).toBe('seja');
    expect(result[2].palavra).toBe('Olá,');
    expect(result[3].palavra).toBe('desafio');
    expect(result[4].palavra).toBe('bem');
    expect(result[5].palavra).toBe('ao');
})