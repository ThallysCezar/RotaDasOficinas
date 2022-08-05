import React, { useContext } from "react";
import FavoriteContexts from "./contexts/favoriteContexts";



const Navbar = (props) => {
  const { favoritePokemons } = useContext(FavoriteContexts);
  //usando uma variavel para receber o link, para assim, usar no src da img
  const logoPokeapi =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div>
        <img alt="pokeapi-logo" src={logoPokeapi} className="navbar-img" />
      </div>
      <div>{favoritePokemons.length}💜</div>
    </nav>
  );
};

export default Navbar;
