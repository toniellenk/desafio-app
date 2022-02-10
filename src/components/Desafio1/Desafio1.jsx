import React from 'react';
import api from '../../services/api';

const Desafio1 = () => {

    const carregarUsuarios = async () => {
        await api.get('/users')
            .then(response => { 
                if (response?.data?.data){
                    const usersResult = response.data.data.map(u => {
                        return {
                            id: u.id,
                            nome: u.first_name,
                            sobrenome: u.last_name,
                            email: u.email
                        }
                    })

    
                    console.log('Usuarios => ' + JSON.stringify(usersResult));

                    let usersSemPrimeiro = [];
                    for (let index = 1; index < usersResult.length; index++) {
                        const element = usersResult[index];
                        usersSemPrimeiro.push(element);
                    }

                    console.log('Usuarios exceto o primeiro => ' + JSON.stringify(usersSemPrimeiro));

                    const usuarioComIdIgualAUm = usersResult.filter(u => u.id === 1)[0];
                    console.log('Usuarios com ID igual a 1 => ' + JSON.stringify(usuarioComIdIgualAUm));

                    const nomeUsuariosContatenado = usersResult.map(u => u.nome).join(', ');
                    console.log('Nome usuários concatenados => ' + nomeUsuariosContatenado);

                }
            })
            .catch(error => {
                console.log(error);
             })
    }


    return (
        <div>
            <button onClick={carregarUsuarios}>
                Desafio 1
            </button>
        </div>
    );
}

export default Desafio1;