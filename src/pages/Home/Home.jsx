
import Sidebar from "../../components/Sidebar/Sidebar";
import AudioFiles from "../../components/AudioFiles/AudioFiles";
import { useState } from "react";
import { audios } from "../../audioData";
import Player from "../../components/Player/Player";
import '../../components/Player/Player.css';
import '../../App.css'
import './Home.css'; // Import the CSS file for positioning


function Home({setPlaylist , playlist}) {
  const [songs, setSongs] = useState(audios);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(songs[0]);
 // const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (song) => {
    setPlaylist([...playlist, song]);
    console.log([...playlist, song])
  };
  console.log(playlist)


  // console.log("Songs:", songs);
  // console.log(currentIndex);

  const getSongData = (song, index) => {
    setCurrentIndex(index);
    setCurrentSong(song);
  };

  const nextSong = () => {
    console.log(songs.length)
    if (currentIndex === songs.length-1){
      setCurrentSong(songs[0])
    }
    else{
      setCurrentIndex(currentIndex + 1);
      setCurrentSong(audios[currentIndex + 1]);
    }
    

   
  };

  const prevSong = () => {
    if (currentIndex === 0){
      setCurrentSong(songs[songs.length-1])
    }
    else{
      setCurrentIndex(currentIndex - 1);
    setCurrentSong(songs[currentIndex - 1]);
    }
    
  };

  return (
    <>
      <Sidebar />
      <div className="home-container">
        <div className="player-main">
          <Player
            currentSong={currentSong}
            currentIndex={currentIndex}
            nextSong={nextSong}
            prevSong={prevSong}
          />
        </div>
        <div className="audio-list">
          <h1 className="song-list-title">Song List</h1>
          <ul className="song-list">
            {songs &&
              songs.map((song, index) => (
                <li key={index}>
                <div>
                    <AudioFiles
                      song={song}
                      index={index}
                      getSongData={getSongData}
                      
                    />
                    <button onClick={() => addToPlaylist(song)}>
                      Add to Playlist
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;

