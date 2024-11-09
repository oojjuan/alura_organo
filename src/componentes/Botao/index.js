import './botao.css'

const Botao = (props) => {
    return (
        //Retorna a propriedade especial 'children', que apesar de não ser visível, ela é todo o conteúdo entre as <>, que neste caso é 'Criar Card'
        <button className='botao'>
            {props.children}
        </button>
    )
}

export default Botao