
import './Player.css';
import { PiPlayCircleBold, PiPauseCircleBold } from "react-icons/pi";
import { ImPrevious, ImNext } from "react-icons/im";
import { useState, useRef, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
function Player({ currentSong,currentIndex,nextSong,prevSong }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying,currentIndex]);

  return (
    <div>
      <audio ref={audioRef} src={currentSong.music} />

      <h5 className='activesong-name'>{currentSong.name}</h5>
      <h5 className='activeartist-name'>{currentSong.creator}</h5>

      <div className='player-card'>
        <div className='control-icon'>
          <ImPrevious color='white' className='icons' size={44}
          onClick = {prevSong} />
          {isPlaying ? (
            <PiPauseCircleBold
              color='#ff5722'
              className='icons'
              size={70}
              onClick={togglePlay}
            />
          ) : (
            <PiPlayCircleBold
              color='#ff5722'
              className='icons'
              size={70}
              onClick={togglePlay}
            />
          )}
          <ImNext color='white' className='icons' size={44} 
          onClick={nextSong}/>
        </div>
      </div>
    </div>
  );
}

export default Player;