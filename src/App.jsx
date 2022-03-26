import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as recordService from './services/recordService'
import RecordList from './pages/RecordList/RecordList'


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [profile, setProfile] = useState({})
  const navigate = useNavigate()
  const [artists, setArtists] = useState({})
  const [albums, setAlbums] = useState({})

  const [search, setSearch] = useState({query: ''})
  const [searchResults, setSearchResults] = useState({artists: [], albums: []})

  // useEffect(() => {
  //   if (user) {
  //     profileService.getProfile(user.profile)
  //     .then(profileData => {
  //       setProfile(profileData)
  //     })
  //   }
  // }, [user])

  useEffect(() => {
    recordService.getAllRecords()
    .then(artistData => setArtists(artistData.results))
  },[])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleSubmitSearch = evt => {
    setSearchResults({
      artists: artists.filter(artist => artist.name.includes(search.query)),
    })
  }

  const handleSetSearch = evt => {
    setSearch({...search, [evt.target.name]: evt.target.value})
  }
  
  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} 
      handleSubmitSearch={handleSubmitSearch} handleSetSearch={handleSetSearch}
      />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
        <Route path="/recordList" 
        element={<RecordList />} 
        />        
      </Routes>
    </>
  )
}

export default App
