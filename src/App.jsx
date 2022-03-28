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
import RecordSearch from './pages/RecordSearch/RecordSearch';
import * as recordService from './services/recordService'
import RecordDetails from './pages/RecordDetails/RecordDetails'


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [records, setRecords] = useState([])
  const [search, setSearch] = useState({query: ''})

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

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout}
      search={search}
      handleSubmitSearch={handleSubmitSearch} handleSetSearch={handleSetSearch} />
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
        <Route path="/recordSearch" 
        element={<RecordSearch 
        records={records}
        />} 
        />
        <Route path="/record"
        element={<RecordDetails />}/>        
      </Routes>
    </>
  )
}

export default App
