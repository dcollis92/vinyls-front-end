import './App.scss';
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import RecordSearch from './pages/RecordSearch/RecordSearch';
import * as recordService from './services/recordService'
import RecordDetails from './pages/RecordDetails/RecordDetails'
import ArtistDetails from './pages/ArtistDetails/ArtistDetails'


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [profile, setProfile] = useState({})
  const navigate = useNavigate()
  const [records, setRecords] = useState([])
  const [search, setSearch] = useState({query: ''})

  useEffect(() => {
    if (user) {
      profileService.getProfile(user.profile)
      .then(profileData => {
        setProfile(profileData)
      })
    }
  }, [user])

  // const handleRecordSearch = () => {
  //   recordService.getAllRecords(search.query)
  //   .then(recordResults => setRecords(recordResults.results))
  // }

  // useEffect(queryString => {
  //   console.log('hitting UE');
  //   recordService.getAllRecords(queryString)
  //   .then(recordResults => setRecords(recordResults.results))
  // }, [])

  const handleSetSearch = evt => {
    console.log('hitting handlesetsearch');
    setSearch({...search, [evt.target.name] : evt.target.value})
  }


  const handleSubmitSearch = evt => {
    console.log('hitting handlesubmitsearch');
    recordService.getAllRecords(search.query)
    .then(recordResults => setRecords(recordResults.results))
    navigate('/recordSearch')
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddRecord = record => {
    profileService.addRecord(record)
    .then(updatedProfile => {
      setProfile(updatedProfile)
    })
  }

  const handleRemoveRecord = recordsId => {
    profileService.removeRecord(recordsId)
    .then(updatedProfile => {
      setProfile(updatedProfile)
    })
  }
  return (
    <>
      <NavBar user={user} handleLogout={handleLogout}
      search={search}
      handleSubmitSearch={handleSubmitSearch} handleSetSearch={handleSetSearch} />
      <Routes>
        <Route path="/" element={<Landing user={user} 
        />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} 
        />} />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} 
        />} />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" 
        />} />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" 
        />} />
        <Route path="/recordSearch" 
        element={<RecordSearch 
        records={records} 
        profile={profile} 
        handleAddRecord={handleAddRecord} 
        handleRemoveRecord={handleRemoveRecord}
        />} />
        <Route path="/record"
        element={<RecordDetails 
        records={records} 
        profile={profile}         
        handleAddRecord={handleAddRecord} handleRemoveRecord={handleRemoveRecord}
        />} /> 
        <Route path="/artist"
        element={<ArtistDetails records={records} 
        />}/>   
      </Routes>
    </>
  )
}

export default App
