import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import './App.css'
import Loader from './components/Loader'
import Podcasts from './pages/Podcast/Podcast'
import Myplaylists from './components/Myplaylists/Myplaylists'
import Subscription from './pages/Subscription/Subscription'
import {useState} from 'react';

function App() {

  const [playlist, setPlaylist] = useState([]);

   const { user } = useAuthContext()


  return (
    <div className="title">
      <h1> 🌟 GeTvibe 🎶 </h1>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/home"
              element={ user ? <Home playlist={playlist} setPlaylist={setPlaylist}/>: <Navigate to="/login"/> }
            />
            <Route 
              path="/login"
              element={! user ? <Login /> : <Navigate to="/home"/>}
              loader = {<Loader/>}
            />
            <Route 
              path="/signup"
              element={! user ? <Signup /> : <Navigate to="/home"/>}
            />
            <Route
            path="/loader"
            element={<Loader/>}
            />
            <Route
            path="/podcasts"
            element={<Podcasts/>}
            />
            <Route
            path="/subscription"
            element={<Subscription/>}
            />
             <Route
            path="/myplaylists"
            element={<Myplaylists playlist={playlist}/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
