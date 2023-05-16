import "./Track.css";
import { Track as ITrack } from "../App/App";

interface TrackProps {
  track: ITrack;
  onAdd: (track: ITrack) => void;
  isRemoval: boolean | undefined;
  onRemove: ((track: ITrack) => void) | undefined;
}

function Track({ track, onAdd, isRemoval, onRemove }: TrackProps) {
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
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
