import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Link } from 'react-router-dom'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <main>
      <h1>Hello. This is a list of all the profiles. Yay</h1>
      {profiles.length ? 
        <>
        <Link 
        to="/usercollection"
        >
          {profiles.map(profile=>
            <p key={profile._id}>{profile.name}</p>
          )}
        </Link>
        </>
      :
        <p>No profiles yet</p>
      }
    </main>
  )
}
 
export default Profiles