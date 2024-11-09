import './campoTexto.css'

const CampoTexto = (props) => {
    
    const placeholderModificada = `${props.placeholder}`

    const aoDigitado = (evento) => {
        //A-5: A constante 'aoDigitado' altera o valor da propriedade 'aoAlterado', a qual armazena uma arrow function (próx. Formulário)
        props.aoAlterado(evento.target.value)
    }
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input
            //A-3: O input vai salvar o atributo 'value' com a propriedade valor, o qual é o 'nome' e inicialmente é apenas ''
            value={props.valor}
            //A-4: Qualquer mudança vai acionar a const 'aoDigitado'
            onChange={aoDigitado}
            required={props.obrigatorio}
            placeholder={placeholderModificada}
            />
        </div>
    )
}

export default CampoTexto