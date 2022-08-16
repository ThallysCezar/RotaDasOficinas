export const searchPokemon = async (pokemon) => {
    try{
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        //o que vamos receber da chamada que estamos fazendo 
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}

export const getPokemons = async (limit = 50, offset = 0) => {
    try{
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        //o que vamos receber da chamada que estamos fazendo 
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}

export const getPokemonData = async (url) => {
    try{
        //o que vamos receber da chamada que estamos fazendo 
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}

export const getList = async () => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const data = response.json();
    return data;
  };