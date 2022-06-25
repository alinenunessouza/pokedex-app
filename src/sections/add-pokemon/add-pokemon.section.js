import React, { PureComponent } from 'react'
import { POKEBALL } from '../../assets'
import './add-pokemon.css'

export class AddPokemon extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      imageUrl: '',
    }
  }

  onChangeName = (event) => {
    this.setState({ name: event.target.value })
  }

  onChangeImageUrl = (event) => {
    this.setState({ imageUrl: event.target.value })
  }

  salvar = () => {
    const nome = this.state.name
    const image = this.state.imageUrl
    { this.props.onSave(nome, image) }
  }

  render() {
    return (
      <div className="container_screen">
      
        <div className="pokeball_icon">
          <img src={POKEBALL} alt="Ícone de uma pokebola" />
        </div>

        <h1>Vamos adicionar um novo Pokémon!</h1>

        <div className="container_add-fields">

          <div className="field">
            <div>Nome do Pokémon</div>
            <input type="text" placeholder="Digite o nome do Pokémon" onChange={this.onChangeName}
              value={this.state.name} />
          </div>

          <div className="field">
            <div>Url da imagem</div>
            <input type="text" placeholder="Digite a Url da imagem do Pokémon" onChange={this.onChangeImageUrl}
              value={this.state.imageUrl} />
            <div className="new-pokemon_preview">
              <img src={this.state.imageUrl} alt="Imagem do Pokémon a ser adicionado" />
            </div>
          </div>

          <div className="nav-Btn">
            <button onClick={this.props.changeView}>Voltar</button>
            <button onClick={this.salvar}>Salvar</button>
          </div>

        </div>
      </div>
    )
  }
}
