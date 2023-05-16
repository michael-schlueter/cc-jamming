import "./Playlist.css";
import TrackList from "../TrackList/TrackList";
import { Track } from "../App/App";

interface PlaylistProps {
  playlistTracks: Track[];
  onNameChange: (name: string) => void;
  name: string;
  onRemove: (track: Track) => void;
  onSave: () => void;
  onAdd: (track: Track) => void;
}

function Playlist({
  playlistTracks,
  onNameChange,
  onRemove,
  onSave,
  onAdd,
  name,
}: PlaylistProps) {
  return (
    <div className="Playlist">
      <input
        onChange={(event) => onNameChange(event.target.value)}
        value={name}
      />
      <TrackList
        tracks={playlistTracks}
        isRemoval={true}
        onRemove={onRemove}
        onAdd={onAdd}
      />
      <button className="Playlist-save" onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;
