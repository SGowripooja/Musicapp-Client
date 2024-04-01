
import React from 'react';
import Sidebar from "../Sidebar/Sidebar";
import { Link } from 'react-router-dom';

function Myplaylists({ playlist, addToPlaylist }) {
  console.log(playlist);

  return (
    <div >
      <Sidebar />
      <h5 className='title-playlist'>My Playlists</h5>
      <div >
        {playlist && playlist.map((song, index) => (
          <div  key={index}>
            <h5 className='playlistsong-title'>{song.name}</h5>
            <audio controls>
              <source src={song.music} type="audio/mp3" />
            </audio>
            {/* Add button to remove song from playlist */}
            <button>Like</button>
          </div>
        ))}
      </div>
      <Link to="/home">Go Back to Home</Link>
    </div>
  );
}

export default Myplaylists;
