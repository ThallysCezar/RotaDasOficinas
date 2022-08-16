import React from "react";
import { useState } from "react";

const SearchBar = (props) => {

  //mostrar o que a gente ta procurando, usando o hook, para deixar no estado e atualizar a page
  const [search, setSearch] = useState("dito");

    const {onSearch} = props;

    /**
     * If the input is empty, then the onSearch function will be undefined.
     * @param e - event
     */
    const onChangeHandler = (e) => {
        //verá o que está digitando na lateral do input
        setSearch(e.target.value);
        if (e.target.value.length === 0) {
            onSearch(undefined)
        }
    }

  /**
   * OnButtonClickHandler is a function that calls the onSearch function with the search parameter.
   */
  const onButtonClickHandler = () => {
   onSearch(search)
  }
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Search things" onChange={onChangeHandler}/>
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}> Search </button>
      </div>
    </div>
  );
};

export default SearchBar;