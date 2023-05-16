import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";
import { Track } from "../App/App";
interface SearchResultsProps {
  searchResults: Track[];
  onAdd: (track: Track) => void;
}

function SearchResults({ searchResults, onAdd }: SearchResultsProps) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={searchResults} onAdd={onAdd} />
    </div>
  );
}

export default SearchResults;
