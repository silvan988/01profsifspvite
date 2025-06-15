import React, { useState } from "react";
import './Formulario.css';
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";

const Formulario = (props) => {

    const areas = [
        'Progr. Básica',
        'Progr. Web',
        'Banco de Dados',
        'Tec. Informação',
        'Diversos'
    ]
    
    // Criando os estados...
    const [nome, setNome] = useState('')
    const [titulo, setTitulo] = useState('')
    const [imagem, setImagem] = useState('')
    const [area, setArea] = useState('Progr. Básica')
    
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoProfCadastrado(
            {
                "nome": nome,
                "titulo": titulo,
                "imagem": imagem,
                "area": area
            }
        );
    }

    return (
        <section className="formulario">
            <form
                onSubmit={aoSalvar}>
                <h2>Dados do professor:</h2>
                <CampoTexto
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    label="Título"
                    placeholder="Digite seu título"
                    valor={titulo}
                    aoAlterado={valor => setTitulo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    label="Áreas"
                    itens={areas}
                    aoAlterado={valor => setArea(valor)}
                />
                <Botao>Criar Professor</Botao>
            </form>
        </section>
    )
}
export default Formulario;

