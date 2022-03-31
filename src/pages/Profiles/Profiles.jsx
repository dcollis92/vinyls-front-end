import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Link } from 'react-router-dom'
import Profile from '../../components/Profile/Profile'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  console.log(profiles);

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <main>
      <h1>Hello. This is a list of all the profiles. Yay</h1>
      {profiles.length ? 
        <>
        <div>
          <h2>Profiles</h2>
          </div>
          <div className='row'>
          {profiles.map(profile =>
              <div>
                <div>
                  <div>
                    <Profile key={profile.name} profile={profile} />
                  </div>
                  <div>
                    <p><Link
                      to='/profile'
                      state={{profile}}
                      >
                        <h3>{profile.name}</h3>
                      </Link></p>
                  </div>
                </div>
              </div>
          )}
          </div>
          </>
      :
        <p>No profiles yet</p>
      }
    </main>
  )
}

export default Profiles