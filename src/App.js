import React, { Component, Fragment } from 'react'; //A classe Component vai entre chaves porque ele pertence ao React

import { ListPokemon } from './sections/list-pokemon/list-pokemon.section'
import { AddPokemon } from './sections/add-pokemon/add-pokemon.section'
import { NO_IMAGE } from './assets'
import pokemonsList from './pokemons-default'
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listPokemon: [],
      filteredListPokemon: [],
      view: 'list-pokemon',
    }

  }

  filterPokemon = (pesquisa) => {
    let updatedList

    if (pesquisa) {
      updatedList = this.state.listPokemon;

      let val = pesquisa.toLowerCase();
      updatedList = updatedList.filter(pokemon => pokemon.name.toLowerCase().includes(val));
    }
    else {
      updatedList = [...this.state.listPokemon]
    }
    this.setState({ filteredListPokemon: updatedList });
  }

  addPokemon = (nomeNovoPokemon, imageUrlNovoPokemon) => {
    const newPokemon = {
      name: nomeNovoPokemon,
      imageUrl: imageUrlNovoPokemon || NO_IMAGE
    }
    const newList = [...this.state.listPokemon, newPokemon]
    this.setState({ listPokemon: newList })
    this.setState({ filteredListPokemon: newList })

    this.changeView()
  }

  changeView = () => {
    let viewName = (this.state.view === "list-pokemon") ? "add-pokemon" : "list-pokemon"
    this.setState({
      view: viewName
    })
  }

  componentDidMount() {
    this.setState({ listPokemon : pokemonsList })
    this.setState({ filteredListPokemon : pokemonsList })
  }

  render() {
    if (this.state.view === 'list-pokemon')
      return (
        <ListPokemon pokemons={this.state.filteredListPokemon} filterPokemon={this.filterPokemon.bind(this)} adicionar={this.changeView.bind(this)} />
      )
    if (this.state.view === 'add-pokemon')
      return (
        <AddPokemon changeView={this.changeView.bind(this)} onSave={this.addPokemon.bind(this)} />
      )
  }

}

export default App
