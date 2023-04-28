import { FormEvent, useCallback, useState } from "react";
import { SearchBarProps } from "../../interfaces/weatherTypes";
import "./SearchBar.css"

function SearchBar(props: SearchBarProps) {

  const [city, setCity] = useState(''); // Ciudad escrita por el usuario

  const handleInputChange = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Previene que la página se recargue al enviar el formulario
    props.onSearchSubmit(city);
    setCity('');
    event.currentTarget.reset(); // Limpia el valor del input después de enviar el formulario
  }, [city, props.onSearchSubmit]);

  const handleInputValueChange = useCallback((event: FormEvent<HTMLInputElement>) => {
    setCity(event.currentTarget.value);
  }, []);
  
  return (
    <>
      <form onSubmit={ handleInputChange }>
        <input type="search" required value={city} onInput={handleInputValueChange} />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </>

  );
}

export default SearchBar;
