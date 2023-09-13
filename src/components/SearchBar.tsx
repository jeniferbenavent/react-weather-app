import "../styles/SearchBar.css"

import { FormEvent, useCallback, useState } from "react";

import { SearchBarProps } from "../interfaces/weatherTypes";

export const SearchBar = (props: SearchBarProps) => {
  const [city, setCity] = useState(''); // Ciudad escrita por el usuario

  const handleInputChange = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Previene que la página se recargue al enviar el formulario
    props.onSearchSubmit(city);
    setCity('');
    event.currentTarget.reset(); // Limpia el valor del input después de enviar el formulario
    console.log(city);
  }, [city, props.onSearchSubmit]);

  const handleInputValueChange = useCallback((event: FormEvent<HTMLInputElement>) => {
    setCity(event.currentTarget.value);
    
  }, []);
  
  
  return (
    <form onSubmit={ handleInputChange } className="search__container">
      <div className="search__input-container">
        <input className="search__input" type="search" placeholder="Tokyo, Paris, Sevilla..." value={city} onInput={handleInputValueChange} />
        <button type="submit">
        <img src="/static/images/busqueda.png" alt="Search icon"/>
        </button>
      </div>
    </form>
  );
}