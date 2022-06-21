import React from "react";
import styled from 'styled-components';
import '../App.css';

const Button = styled.button`
    cursor: pointer;
    color: white;
    background: #cda574;
    border: 1px solid #cda574;
    padding: 5px 15px;
    height: 30px;
    position: absolute;
    right: 20px;
    bottom: 0;
    top: 0;
    margin: auto;
  &:hover, 
  &:focus {
    background: #b17d3d;
  }
`

interface AlbumInterface {
  albumTitle: string;
  release: number;
  itemIndex: number;
  itemClicked: (data: number) => void;
}
const ListAlbuns: React.FC<AlbumInterface> = (props: AlbumInterface ) => {
  const [selectedRow, setSelectedRow] = React.useState<boolean>(false);
  const clickHandler = () => {
    setSelectedRow(!selectedRow);
    props.itemClicked(props.itemIndex);
  }
  return (
    <div 
    className={`row_album ${selectedRow ? 'selected' : ''}`} 
    onMouseEnter={() => setSelectedRow(true)} onMouseLeave={() => setSelectedRow(false)}>
      <h4>{props.albumTitle}</h4>
      <p>{props.release}</p>
      <Button onClick={clickHandler}>Show Tracks</Button>
    </div>
  )
}
export default ListAlbuns;