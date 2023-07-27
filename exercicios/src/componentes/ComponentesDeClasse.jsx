import React, {Component} from "react";

export default class ComponentesDeClasse extends Component {

    state = {
        tipo: "fala",
        nome: "José"
    }

    constructor(props) {
        super(props)

        this.setTipo = this.setTipo.bind(this) /*Definir o this como referente a classe*/
    }

    setTipo(e) {
        this.setState({tipo: e.target.value})
    }

    setNome(e) {
        this.setState({nome: e.target.value})
    }


    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1> {tipo} {nome}</h1>
                <hr/>
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}/>
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)}/> {/*Referência há classe diretamente na instância*/}
            </div>
        )
    }
}