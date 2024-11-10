import { useState } from 'react'
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';


function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'DevOps',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    },
  ]
  
  const [colaboradores, setColaboradores] = useState([])
  
  const aoNovoColaboradorAdicionado = (colaborador) => {
    //debugger
    setColaboradores(([...colaboradores, colaborador]))
  }

  function deletarColaborador() {

  }

  return (
    <div className="App">
      <Banner />
      <Formulario
      // Vai mapear cada elem. do array, que serão nomeados como 'time'. Após isso, a arrow function ira retornar o nome de cada 'time' e salvar cada uma na propriedade 'times'.
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      {times.map(time =>
        <Time
      // Caso o valor retornado ao componente 'Time' seja '', não renderiza nada
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          // A propriedade irá filtrar a array 'colaboradores' e selecionar apenas o que tiver o valor 'time' igual ao valor 'nome do time'
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
      />)}
      <Rodape />
    </div>
  );
}

export default App;
