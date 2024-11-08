import Card from '../Card'
import './time.css'

const Time = (props) => {
    
    const cssFundo = { backgroundColor: props.corSecundaria }

    const cssLinha = { backgroundColor: props.corPrimaria }
    
    return (
        props.colaboradores.length > 0 ? <section className='time' style={cssFundo}> 
            <h3>{props.nome}</h3>
            <hr style={cssLinha}/>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Card
                corDeFundo={props.corPrimaria}
                key={colaborador.nome}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}/> )} 
            </div>
        </section>
        : ''
    )
}

export default Time