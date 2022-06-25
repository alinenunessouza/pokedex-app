import React, { PureComponent } from 'react'
import { Card } from '../../components'
import { ADD, POKEDEX } from '../../assets'
import './list-pokemon.css'

export class ListPokemon extends PureComponent {
  constructor(props) { //é necessário para usar os props, registrar
    super(props)

    this.state = {
      search: ""
    }
  }

  renderLista() {
    return this.props.pokemons.map(pokemon => {
      return (
        <div className="card-item">
          <Card>
            <img className="image" src={pokemon.imageUrl} alt="">
            </img>
            <div className="pokemon_name">
              {pokemon.name}
            </div>
          </Card>
        </div>
      )
    })
  }

  onChangeFilter = (event) => {
    this.setState({ search: event.target.value })
    this.props.filterPokemon(event.target.value)
  }

  render() {
    return (
      <div className="container_screen">

        <div className="pokedex_icon">
          <img src={POKEDEX} alt="Ícone de uma pokedex" />
        </div>

        <h1>No momento você possui {this.props.pokemons.length} Pokémons na sua Pokédex</h1>

        <form>
          <input type="text" className="form-control" placeholder="Filtrar pelo nome..." onChange={this.onChangeFilter} value={this.state.search} />
        </form>

        <div className="container-cards">

          {this.renderLista()}

          <Card>
            <div className="add card-item">
              <button>
                <img src={ADD} alt="Botão que redireciona para outra tela para adicionar um novo Pokémon" onClick={this.props.adicionar} />
              </button>
              <span>Adicionar Pokémon</span>
            </div>
          </Card>

        </div>
      </div>
    )
  }
}
