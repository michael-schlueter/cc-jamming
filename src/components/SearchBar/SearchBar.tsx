import { useState, useCallback } from "react";
import "./SearchBar.css";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const search = useCallback(() => {
    onSearch(searchTerm);
  }, [searchTerm, onSearch]);

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song Title"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button className="SearchButton" onClick={search}>
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
