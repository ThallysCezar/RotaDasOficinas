import React from "react";
import { useState } from "react";
import { searchPokemon } from './../api';

const SearchBar = () => {
    //estado para poder guardar o resultado da busca 
    const [pokemon, setPokemon] = useState();

    //mostrar o que a gente ta procurando, usando o hook, para deixar no estado e atualizar a page
    const [search, setSearch] = useState("dito");

    const onChangeHandler = (e) => {
        //verá o que está digitando na lateral do input
        setSearch(e.target.value);
    }

    const onButtonClickHandler = () => {
        onSearchHandler(search)
    }

    const onSearchHandler = async (pokemon) => {
        //chamada do search pokemon
        const result = await searchPokemon(pokemon);
        //atualizar o pokemon como o resultado que teve no buscar
        setPokemon(result);
    }



    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Search Pokemons" onChange={onChangeHandler}/>
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler}> Search </button>
            </div>
            
            {pokemon ? (
                <div>
                    <div>Nome: {pokemon.name}</div>
                    <div>Peso: {pokemon.weight}</div>
                    <img src=  {pokemon.sprites.front_default} alt={pokemon.name}/>
                </div>
            ) : null}
        </div>
    );

};

export default SearchBar;