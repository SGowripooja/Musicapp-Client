import Sidebar from "../../components/Sidebar/Sidebar";
import { podcasts} from "../../podcastData"
import PodcastFiles from "../../components/PodcastFiles/PodcastFiles"
import PodcastPlayer from "../../components/PodcastPlayer/PodcastPlayer";
import '../../App.css'
import { useState } from "react";


function Podcasts() {
  console.log(podcasts)
  const [pods, setPods] = useState(podcasts);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentPod, setCurrentPod] = useState(pods[0]);
  const [playlist, setPlaylist] = useState([]);
  console.log(pods)

  const addToPlaylist = (pod) => {
    setPlaylist([...playlist, pod]);
    console.log([...playlist, pod])
  };


  // console.log("Songs:", pods);
  // console.log(currentIndex - 1);

  const getPodcastData = (pod, index) => {
    setCurrentIndex(index);
    setCurrentPod(pod);
  };

  const nextPod = () => {
    console.log(pods.length)
    if (currentIndex === pods.length-1){
      setCurrentPod(pods[0])
    }
    else{
      setCurrentIndex(currentIndex + 1);
      setCurrentPod(podcasts[currentIndex + 1]);
    }
    
   
  };

  const prevPod = () => {
    if (currentIndex === 0){
      setCurrentPod(pods[pods.length-1])
    }
    else{
      setCurrentIndex(currentIndex - 1);
    setCurrentPod(pods[currentIndex - 1]);
    }
    
  };

  return (
    <>
      <Sidebar />
      <div className="home-container">
        <div className="player-main">
          <PodcastPlayer
            currentPod={currentPod}
            currentIndex={currentIndex}
            nextPod={nextPod}
            prevPod={prevPod}
          />
        </div>
        <div className="audio-list">
          <h5 className="song-list-title">Podcast List</h5>
          <ul className="song-list">
            {pods &&
              pods.map((pod, index) => (
                <li key={index}>
                <div>
                    <PodcastFiles
                      pod={pod}
                      index={index}
                      getPodcastData={getPodcastData}
                    />
                    <button onClick={() => addToPlaylist(pod)}>
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

export default Podcasts