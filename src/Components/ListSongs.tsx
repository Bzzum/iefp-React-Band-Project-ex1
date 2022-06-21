import React from 'react';
import '../App.css';

const ListSongs: React.FC<{trackList: string[]}> = (props) => {
  return (
    <ol className="row_song">
      {props.trackList.map((row: string, index: number) => (
          <li key={index}>{row}</li>
      ))}
    </ol>
  );
}
export default ListSongs;