// import React from 'react'
// import Myplaylists from '../../components/Myplaylists'
// import {useState} from 'react';

// function Playlists() {
//     const [playlist, setPlaylist] = useState([]);
//   return (
//     <div>
//         <Myplaylists playlist={playlist}/>
//     </div>
//   )
// }

// export default Playlists


import React from 'react';
import Myplaylists from '../../components/Myplaylists';

function Playlists({ addToPlaylist }) {
  return (
    <div>
      {/* <Myplaylists addToPlaylist={addToPlaylist} /> */}
      <p>{}</p>
    </div>
  );
}

export default Playlists;
