import ".TrackList.css";
import Track from "../Track/Track";

interface ITrack {
    id: string;
    name: string;
    artist: string;
    album: string;
    uri: string;
  }
interface TrackListProps {
    tracks: ITrack[];
    onAdd: (track: ITrack) => void;
    isRemoval?: boolean;
    onRemove?: (track: ITrack) => void;
}

function TrackList({ tracks, isRemoval, onRemove, onAdd }: TrackListProps) {
  return (
    <div className="TrackList">
      {tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={onAdd}
            isRemoval={isRemoval}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  );
}

export default TrackList;
