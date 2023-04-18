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
    <div className="div-main-search">
      <form onSubmit={ handleInputChange }>
          <button type="submit" className="search-btn">
            <img src="src/assets/icons/placeholder.png" width="25px"/>
          </button>
        <input type="text" className="search-div" placeholder="Search city..." value={city} onInput={handleInputValueChange} />
      </form>
    </div>
  );
}

export default SearchBar;
