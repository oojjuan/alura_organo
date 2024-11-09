import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

const Formulario = (props) => {
    //A-1: Salva o estado inicial da const como '', e o estado atualizado dela (setConst)
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    
    const aoSalvar = (evento) => {
        // Evita que o evento padrão do formulario ocorra, que é o reload da página
        evento.preventDefault()
        // Localiza a propriedade 'aoColaboradorCadastrado', puxa suas informações e salva
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    //A-2: A propriedade valor é o 'nome', que inicialmente é apenas '' (próx. CampoTexto)
                    valor={nome}
                    //A-6: O valor dessa propriedade redefine a const 'setNome' para o parâmetro 'valor', que nesse caso é 'evento.target.value'
                    aoAlterado={valor => setNome(valor)}
                    //A-7: Consequentemente, ao alterar a variável const 'setNome', ele altera a const 'nome'
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    label="Times"
                    // Essa propriedade puxa o valor da propriedade 'times' dentro do 'App'
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario