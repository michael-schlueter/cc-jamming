import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

interface Track {
    id: string;
    name: string;
    artist: string;
    album: string;
    uri: string;
  }
interface PlaylistProps {
    playlistTracks: Track[];
    onNameChange: (name: string) => void;
    onRemove: (track: Track) => void;
    onSave: () => void;
    onAdd: (track: Track) => void
}

function Playlist({ playlistTracks, onNameChange, onRemove, onSave, onAdd }: PlaylistProps) {
  return (
    <div className="Playlist">
      <input
        onChange={(event) => onNameChange(event.target.value)}
        defaultValue={"New Playlist"}
      />
      <TrackList tracks={playlistTracks} isRemoval={true} onRemove={onRemove} onAdd={onAdd} />
      <button className="Playlist-save" onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;
