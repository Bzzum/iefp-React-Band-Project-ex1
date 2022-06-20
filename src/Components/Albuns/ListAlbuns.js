import CardAlbum from "./CardAlbum";

const ListAlbuns = (props) => {
  const clickHandler = () => {
    props.itemClicked(props.itemIndex);
  }
  return (
    <div>
      <CardAlbum>
        <div>
          <h4>{props.album}</h4>
          <p>{props.release}</p>
          <button onClick={clickHandler}>Show Tracks</button>
        </div>
      </CardAlbum>
    </div>
  )
}
export default ListAlbuns;