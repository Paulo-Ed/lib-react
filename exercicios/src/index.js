import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './componentes/Primeiro'
import Segundo from './componentes/Segundo'
import Multiplos, { Teste2 } from './componentes/Multiplos'
import ComponentesDeClasse from './componentes/ComponentesDeClasse'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Santos">
            <Filho nome="Isaac"/>
            <Filho nome="Helena"/>
            <Filho nome="Isabela"/>
        </Pai>
    </div>
, document.getElementById('root'))


// ReactDOM.render(
//     <div>
//         <ComponentesDeClasse tipo="Bom dia" nome="João"/>
//     </div>
// , document.getElementById('root'))

// ReactDOM.render(
//     <div>
//         <Multiplos.Teste1/>
//         <Teste2></Teste2>
//     </div>
// , document.getElementById('root'))