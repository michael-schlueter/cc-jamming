import { useState } from "react";
import "./SearchBar.css";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="SearchBar" onSubmit={handleSearch}>
      <input
        placeholder="Enter A Song Title"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button type="submit" className="SearchButton">
        SEARCH
      </button>
    </form>
  );
}

export default SearchBar;
