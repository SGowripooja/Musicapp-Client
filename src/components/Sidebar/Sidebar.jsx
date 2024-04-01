
import React, { useEffect, useState } from "react";
import axios from "axios";
import './Sidebar.css';
import { useAuthContext } from '../../hooks/useAuthContext'

function Sidebar() {
  const { user } = useAuthContext()
  const [audioFiles, setAudioFiles] = useState([]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [uploadedAudio, setUploadedAudio] = useState(null);
  const [loading, setLoading] = useState(false);

  function arrayBufferToBase64(arrayBuffer) {
    let binary = '';
    const bytes = new Uint8Array(arrayBuffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  useEffect(() => {
    if (user && user.user) {
      const userId = user.user._id; // Get the userId from the user object
      getAudio(userId); // Pass userId to getAudio function
    }
  }, [user]); // Make sure to include user in the dependency array

  const submitAudio = async (e) => {
    e.preventDefault();

    if (audioFiles.length >= 3) {
      console.log('Reached maximum uploads');
      window.location.href = '/subscription';
      return;
    }

    const formData = new FormData();
    formData.append("audio", uploadedAudio);
    formData.append("userId", user.user._id);

    
    try {
      const result = await axios.post(
        "https://musicapp-server-2.onrender.com/upload-audio",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(result);
      // Refresh the audio list after successful submission
      setLoading(true)
      getAudio();
    } catch (error) {
      console.error('Error uploading audio:', error);
    } finally {
      setLoading(false); // Set loading to false after upload completes
    }
  };

  const onInputChange = (e) => {
    setUploadedAudio(e.target.files[0]);
  };

  const getAudio = async (userId) => {
    
    try {
      const result = await axios.get("https://musicapp-server-2.onrender.com/get-audio", {
        params: { userId }
      });
      setAudioFiles(result.data.audioData);
    } catch (error) {
      console.error('Error fetching audio data:', error);
    } finally {
      setLoading(false); // Set loading to false after fetching completes
    }
  };

  const deleteAudio = async (id) => {
    try {
      setLoading(true); // Set loading to true while deleting
      await axios.delete(`https://musicapp-server-2.onrender.com/file/${id}`);
      // Refresh the audio list after deletion
      await getAudio();
    } catch (error) {
      console.error('Error deleting audio:', error);
    } finally {
      setLoading(false); // Set loading to false after deletion completes
    }
  };

  const handlePlayAudio = (audioData) => {
    const audio = new Audio();
    const base64Data = btoa(new Uint8Array(audioData.audio.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
    audio.src = `data:${audioData.mimetype};base64,${base64Data}`;
    audio.play();
    setCurrentlyPlaying(audioData);
  };

  return (
    <div className="sidebar">
      <form onSubmit={submitAudio}>
        <input className="input-box" type="file" accept="audio/*" onChange={onInputChange}></input>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br/>
      <h2>Your Song List</h2>
      {loading ? <p>Loading...</p> :
        audioFiles.length === 0 ? "No audio files available" :
        audioFiles.map((audioFile, index) => (
          <div key={index}>
            <audio controls>
              <source src={`data:${audioFile.mimetype};base64,${arrayBufferToBase64(audioFile.audio.data)}`} onClick={() => handlePlayAudio(audioFile)} type={audioFile.mimetype} />
            </audio>
            <br />
            <button onClick={() => deleteAudio(audioFile._id)}>Delete File</button>
          </div>
        ))
      }
      {currentlyPlaying && <p>Now playing: {currentlyPlaying.filename}</p>}
    </div>
  );
}

export default Sidebar;

