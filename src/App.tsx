import React, {useState} from 'react';
import ListAlbuns from './Components/Albuns/ListAlbuns';
import ListSongs from './Components/Songs/ListSongs';

import Discography from './Components/models/discography';
import './App.css';

function App() {
  let myListSong = new Discography();
  myListSong.addItem({title: 'An Awesome Wave', release: 2012 , track: ['Intro','(Ripe & Ruin)', 'Tessellate', 'Breezeblocks', 'Guitar', 'Something Good', 'Dissolve me', 'Matilda', 'MS', 'Fitzpleasure', 'Piano', 'Bloodflood', 'Taro', 'Hand-Made']});
  myListSong.addItem({title: 'This Is All Yours', release: 2014 , track: ['Intro','Arrival in Nara', 'Nara', 'Every Other Freckle', 'Left Hand Free', 'Garden Of England - Interlude', 'Choice Kingdom', 'Hunger Of The Pine', 'Warm Foothills', 'The Gospel Of John Hurt', 'Pusher', 'Bloodflood (Pt. II)', 'Leaving Nara', 'Lovely Day (Hidden Track)']});
  myListSong.addItem({title: 'RELAXER', release: 2017 , track: ['3WW','In cold blood', 'House of the rising sun', 'Hit me like that snare', 'Deadcrush', 'Adeline', 'Last year', 'Pleader']});
  myListSong.addItem({title: 'The Dream', release: 2014 , track: ['Bane','U&ME', 'Hard Drive Gold', 'Happier When You’re Gone', 'The Actor', 'Get Better', 'Chicago', 'Philadelphia', 'Walk a mile', 'Delta', 'Losing my mind', 'Powders']});

  let idX: any;
  let setIdX: any;
  [idX, setIdX] = useState(0)
  const getID = (data:number) => {
    setIdX(data);
  }
  return (
   <div className='main_app'>
    <h2>Alt-J discography</h2>
    <div className="list_content">
      <div className="main_album_list">
        {myListSong.list.map((item, index) => (
          <ListAlbuns key={index} album={item.title} itemIndex={index} release={item.release} itemClicked={getID}/>
        ))}
      </div>
      <div className="main_song_list">
        <ListSongs list={myListSong.list[idX].track}></ListSongs>
      </div>
    </div>
   </div>
  )
}

export default App;
