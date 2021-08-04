import React,{ useState, useEffect } from 'react';

import CardList from "./components/CardList/CardList";
import Footer from "./components/Footer/Footer";
import SearchBox from "./components/SearchBox/SearchBox";
import { getAllPokemon, getPokemon} from './services/pokemon';
import { loadingPokemon } from './components/CardList/CardList'


function App() {

  const [searchfield, setSearchfield] = useState('');
  const [pokemonData, setPokemonData] = useState([]);



  const onSearchChange = (event)=>  {
    setSearchfield(event.target.value)
    console.log(event.target.value)
  }

  const filterPokemons = pokemonData.filter(pokemon =>{
    return pokemon.name.toLowerCase().includes(searchfield.toLowerCase())
  
  })
  console.log(filterPokemons)


  return (
    <div className=''>
      <SearchBox searchChange={onSearchChange}/>
      <CardList filterPokemons={filterPokemons} />
    </div>
  );
}

export default App;
