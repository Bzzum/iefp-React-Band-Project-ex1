import React, {useState} from 'react';
import ListAlbuns from './Components/ListAlbuns';
import ListSongs from './Components/ListSongs';

import Discography from './Components/models/discography';
import './App.css';

const App: React.FC = () => {
  let myListSong = new Discography();
  myListSong.addItem({title: 'An Awesome Wave', release: 2012 , track: ['Intro','(Ripe & Ruin)', 'Tessellate', 'Breezeblocks', 'Guitar', 'Something Good', 'Dissolve me', 'Matilda', 'MS', 'Fitzpleasure', 'Piano', 'Bloodflood', 'Taro', 'Hand-Made']});
  myListSong.addItem({title: 'This Is All Yours', release: 2014 , track: ['Intro','Arrival in Nara', 'Nara', 'Every Other Freckle', 'Left Hand Free', 'Garden Of England - Interlude', 'Choice Kingdom', 'Hunger Of The Pine', 'Warm Foothills', 'The Gospel Of John Hurt', 'Pusher', 'Bloodflood (Pt. II)', 'Leaving Nara', 'Lovely Day (Hidden Track)']});
  myListSong.addItem({title: 'RELAXER', release: 2017 , track: ['3WW','In cold blood', 'House of the rising sun', 'Hit me like that snare', 'Deadcrush', 'Adeline', 'Last year', 'Pleader']});
  myListSong.addItem({title: 'The Dream', release: 2020 , track: ['Bane','U&ME', 'Hard Drive Gold', 'Happier When You’re Gone', 'The Actor', 'Get Better', 'Chicago', 'Philadelphia', 'Walk a mile', 'Delta', 'Losing my mind', 'Powders']});

  const getIndexHandler = (data: number) => {
    setIdX(data);
  }

  let idX: number;
  let setIdX: any;
  [idX, setIdX] = useState(0)
//  const getIndexHandler = (data) => {
  //  setIdX(data);
  //}
  return (
   <div className='main_app'>
    <h2>Alt-J discography</h2>
    <div className="list_content">
      <div className="main_album_list">
        {myListSong.list.map((item, index) => (
          <ListAlbuns 
            key={index} 
            albumTitle={item.title} 
            itemIndex={index} 
            release={item.release} 
            itemClicked={getIndexHandler}
          />
        ))}
      </div>
      <div className="main_song_list">
        <ListSongs trackList={myListSong.list[idX].track}></ListSongs>
      </div>
    </div>
   </div>
  )
}

export default App;
