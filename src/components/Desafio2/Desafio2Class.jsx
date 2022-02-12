import React from 'react';
import './Desafio2.css';
import { LongestWord } from '../../utils/LongestWord';
import { format } from 'date-fns'

class Desafio2Class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            texto: '',
            resultado: null
        }
    }

    handleText = (event) => {
        const { value } = event.target;
        this.setState({ texto: value });
    }

    render() {
        return <div className='container' >
            <label>What is the longest word ?</label>
            <input onChange={this.handleText.bind(this)} className='inputText' placeholder='Digite a frase aqui' type="text" name="name" />
            {this.state.resultado && !this.state.texto && <label className='error'>Favor informar uma frase!</label>}
            {
                this.state.resultado && this.state.texto && <label className='resultado'>
                    The longest word is <strong>{LongestWord.Get(this.state.texto)}</strong>
                </label>
            }

            <button className='button' onClick={() => this.setState({ resultado: !this.state.resultado })}>
                Show
            </button>
            <div className='informacoes'>
                <h3>Informações</h3>
                {LongestWord.GetInfo(this.state.texto).map((f, index) => <span key={index} className='letras'>
                    <strong>{f.palavra}</strong>{`: ${f.qtdLetras} letra(s)`}
                </span>)}
            </div>
            <label className='dataHora'>{format(new Date(), 'dd/MM/yyyy HH:mm')}</label>
        </div >
    }
}

export default Desafio2Class;