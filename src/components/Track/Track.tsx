import ".Track.css";

interface Track {
    id: string;
    name: string;
    artist: string;
    album: string;
    uri: string;
  }
interface TrackProps {
    track: Track;
    onAdd: (track: Track) => void;
    isRemoval: boolean | undefined;
    onRemove: ((track: Track) => void) | undefined;
}

function Track({ track, onAdd, isRemoval, onRemove }: TrackProps) {
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.id}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      {isRemoval && onRemove ? (
        <button className="Track-action" onClick={() => onRemove(track)}>
          -
        </button>
      ) : (
        <button className="Track-action" onClick={() => onAdd(track)}>
          +
        </button>
      )}
    </div>
  );
}

export default Track;
