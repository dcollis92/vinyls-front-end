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
import UserCollection from './pages/UserCollection/UserCollection'


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [profile, setProfile] = useState({})
  const navigate = useNavigate()
  const [records, setRecords] = useState([])
  const [search, setSearch] = useState({query: ''})
  const [dbRecords, setDbRecords] = useState([])

  useEffect(() => {
    if (user) {
      profileService.getProfile(user.profile)
      .then(profileData => {
        setProfile(profileData)
      })
    }
  }, [user])

  useEffect(() => {    
    recordService.getRecordsDb()
    .then(recordDbResults => setDbRecords(recordDbResults))
  }, [])

  const handleSetSearch = evt => {    
    setSearch({...search, [evt.target.name] : evt.target.value})
  }

  const handleSubmitSearch = evt => {    
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
    window.location.reload()
  }

  const handleRemoveRecord = (profileId, recordsId) => {
    console.log(profileId, recordsId);
    profileService.removeRecord(profileId, recordsId)
    .then(updatedProfile => {
      setProfile(updatedProfile)
    })
  }

  const handleAddComment = (e, recordId, comment) => {
    e.preventDefault()
    recordService.addComment(recordId, comment).then(updatedRecord => {
      console.log(updatedRecord);
      setDbRecords(dbRecords.map(r => r._id === updatedRecord._id ? updatedRecord : r))
    })
  }
  
  const handleUpdate = (updatedRecord) => {
    setDbRecords(dbRecords.map(r => r._id === updatedRecord._id ? updatedRecord : r))
  }

  const handleAddRating = (recordId, rating) => {
    console.log(rating);
    recordService.addRating(recordId, rating).then(updatedRecord => {
      console.log(updatedRecord);
      setDbRecords(dbRecords.map(r => r._id === updatedRecord._id ? updatedRecord : r))
    })
    console.log('hi', recordId, rating);
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
        dbRecords={dbRecords}         
        handleAddRecord={handleAddRecord} 
        handleRemoveRecord={handleRemoveRecord}
        handleAddComment={handleAddComment}
        handleUpdate={handleUpdate}
        handleAddRating={handleAddRating}
        />} /> 
        <Route path="/artist"
        element={<ArtistDetails records={records} 
        />}/>   
        <Route path="/profile"
        element={<UserCollection records={records}
        user={user} 
        profile={profile}
        handleRemoveRecord={handleRemoveRecord}
        handleAddRecord={handleAddRecord} 
        />}/> 
      </Routes>
    </>
  )
}

export default App
