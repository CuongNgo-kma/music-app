import React, { useState } from 'react';
import './App.css';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import Navbar from './components/Navbar';
import { Songs } from './Contents';
import DataSongs from './songs.json'
import Playing from './components/Playing';
function App() {
  const [song, setSong] = useState(DataSongs[0])
  const handlerSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    setSong(song)
  }
  return (
    <div className="Ap">
      <Songs.Provider value={{ DataSongs, song, handlerSetSong }}>
        <Navbar />
        <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden'>
          {/* span 1 */}
          <DetailSong />
          {/* span 2 */}
          <ListSong />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
