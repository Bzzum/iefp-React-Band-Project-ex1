import React from 'react';
import CardSong from './CardSong';

const ListSongs: React.FC<{list: string[]}> = (props) => {
  return (
    <ol>
      {props.list.map((row, index) => (
        <CardSong key={index}>
          <li>{row}</li>
        </CardSong>
      ))}
    </ol>
  );
}
export default ListSongs;