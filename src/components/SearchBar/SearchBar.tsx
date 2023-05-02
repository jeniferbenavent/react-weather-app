import { useState } from "react";
import { SearchBarProps } from "../../interfaces/weatherTypes";
import "./SearchBar.css"

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState(''); // Ciudad escrita por el usuario

  const handleInputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(inputValue);
    console.log(inputValue);
    
  };
  
  return (
    <>
      <form onSubmit={handleInputSubmit}>
        <input type="search" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </>

  );
}

export default SearchBar;
