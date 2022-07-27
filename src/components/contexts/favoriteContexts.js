import React from "react";

const FavoriteContexts = React.createContext({
    favoritePokemons: [],
    updateFavoritePokemons: (id) => null
});

export const FavoriteProvider = FavoriteContexts.Provider;

export default FavoriteContexts;