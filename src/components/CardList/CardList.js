import React,{ useState, useEffect } from 'react';
import './CardList.css';
import Card from '../Card/Card';
import { getAllPokemon, getPokemon} from '../../services/pokemon'


function CardList({pokemon}) {
    const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNexUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchfield, setSearchfield] = useState('');
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon';




  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setNexUrl(response.next);
      setPrevUrl(response.previous);
      let pokemon = await loadingPokemon(response.results);
      console.log(pokemon);
      setLoading(false);
    }
    fetchData();
  }, [])


  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord;
    }))

    setPokemonData(_pokemonData)
  };
  console.log( pokemonData)

  return (
      <div>
        {
         loading ? <h1>loading.....</h1> :(
        
           <div className="grid-container">
             {pokemonData.map((pokemon, i) => {
               return <Card key={i} pokemon={pokemon}  />
             })}
           </div>
         )
        }
      </div>
  )
}
export default CardList;