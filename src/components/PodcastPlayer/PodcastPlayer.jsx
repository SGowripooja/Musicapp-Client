import { useState, useRef, useEffect } from 'react';
import { PiPlayCircleBold, PiPauseCircleBold } from "react-icons/pi";
import { ImPrevious, ImNext } from "react-icons/im";
import './PodcastPlayer.css';

function PodcastPlayer({ currentPod, nextPod, prevPod }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const podRef = useRef(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      podRef.current.play();
    } else {
      podRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div>
      <audio ref={podRef} src={currentPod.music} />

      <h5 className='activepod-name'>{currentPod.name}</h5>
      <h5 className='activeartists-name'>{currentPod.creator}</h5>

      <div className='podcast-card'>
        <div className='control-icon'>
          <ImPrevious color='white' className='icons' size={44} onClick={prevPod} />
          {isPlaying ? (
            <PiPauseCircleBold color='#ff5722' className='icons' size={70} onClick={togglePlay} />
          ) : (
            <PiPlayCircleBold color='#ff5722' className='icons' size={70} onClick={togglePlay} />
          )}
          <ImNext color='white' className='icons' size={44} onClick={nextPod} />
        </div>
      </div>
    </div>
  );
}

export default PodcastPlayer;
