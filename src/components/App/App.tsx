import "./App.css";

import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../../util/Spotify";
import { useCallback, useState } from "react";

interface Track {
  id: string;
  name: string;
  artist: string;
  album: string;
  uri: string;
}

function App() {
  const [searchResults, setSearchResults] = useState<Track[]>([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState<Track[]>([]);

  const search = useCallback((term: string) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback(
    (track: Track) => {
      if (
        playlistTracks.some((playlistTrack) => playlistTrack.id === track.id)
      ) {
        return;
      }
      const nextPlaylistTracks = [...playlistTracks, track];
      setPlaylistTracks(nextPlaylistTracks);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback(
    (track: Track) => {
      setPlaylistTracks(
        playlistTracks.filter((playlistTrack) => playlistTrack.id !== track.id)
      );
    },
    [playlistTracks]
  );

  const updatePlaylistName = useCallback((name: string) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris)?.then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
      setSearchResults([]);
    });
  }, [playlistTracks, playlistName]);

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistTracks={playlistTracks}
            name={playlistName}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}
            onAdd={addTrack}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
