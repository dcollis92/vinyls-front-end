import './UserCollection.scss';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import * as profileService from '../../services/profileService'
import Profile from '../../components/Profile/Profile'
import Record from '../../components/Record/Record';

const UserCollection = ({handleRemoveRecord}) => {
  const [currProfile, setCurrProfile] = useState(null)

  const location = useLocation()
  const profile = location.state.profile
  
  useEffect(()=> {
    profileService.getProfile(profile._id)
    .then(profile => setCurrProfile(profile))
  }, [])

  return (

    currProfile?
    <>
      <h2>Record Collection</h2>
      <div>
        <Profile key={currProfile.name} />
        <h2>{currProfile.name}</h2>
        <h2>{currProfile?.records?.map(record =>

          <>
          <Record handleRemoveRecord={handleRemoveRecord} profile={currProfile} key={record.id} id={record._id} record={record}/>
          
          <Button onClick={() => handleRemoveRecord(profile._id, record._id)} profile={profile} variant="outline-success">Remove</Button>          
          </>
          
          )}</h2>
      </div>
    </>
    :
    <>
    <div>loading....</div>
    </>

  ); 
}

export default UserCollection;
