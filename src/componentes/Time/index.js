import Card from '../Card'
import './time.css'

const Time = (props) => {
    
    const cssFundo = { backgroundColor: props.corSecundaria }

    const cssLinha = { backgroundColor: props.corPrimaria }

    const backgroundImg = { 
        backgroundImage: `URL(${process.env.PUBLIC_URL}/imagens/fundo.png)`,
        backgroundRepeat: 'no-repeat',
        objectFit: 'contain',
        backgroundPosition: 'center' }

    const style = { ...cssFundo, ...backgroundImg }
    
    return (
        // Caso a array 'colaboradores' for maior que 0, continuar com o código abaixo.
        props.colaboradores.length > 0 ? <section className='time' style={style}> 
            <h3>{props.nome}</h3>
            <hr style={cssLinha}/>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Card
                corDeFundo={props.corPrimaria}
                key={colaborador.nome}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                aoDeletar={() => {}}/> )} 
            </div>
        </section>
        // Caso a array 'colaboradores' NÃO for maior que 0, não informa o código acima.
        : ''
    )
}

export default Time