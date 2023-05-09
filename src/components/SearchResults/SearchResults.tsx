import '.SearchResults.css';
import TrackList from '../TrackList/TrackList';
interface Track {
    id: string;
    name: string;
    artist: string;
    album: string;
    uri: string;
  }
interface SearchResultsProps {
    searchResults: Track[],
    onAdd: (track: Track) => void
}

function SearchResults({ searchResults, onAdd }: SearchResultsProps) {
    return (
        <div className='SearchResults'>
            <h2>Results</h2>
            <TrackList tracks={searchResults} onAdd={onAdd} />
        </div>
    )
}

export default SearchResults;