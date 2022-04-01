import './Profiles.scss';
import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Link } from 'react-router-dom'
import Profile from '../../components/Profile/Profile'


const dogIds = [1025,1012,1062,1084,169,200,219,237,244,275,40,433,577,582,593,611,659,718,783,790,824,837,881,937,943]

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  console.log(profiles);

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <main>
      <div className='profiles container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='results-header text-center'>
              <h1>Profiles</h1>
            </div>
          </div>
        </div>
      {profiles.length ? 
        <>
          <div className='row'>
            {profiles.map(profile =>
            <div className='col-md-4 col-sm-6 col-xs-12 text-center'>
              <div className='single-profile'>
                <div className='profile-img'>
                  <Profile key={profile.name} profile={profile} randDogImgId={dogIds[Math.floor(Math.random()*(dogIds.length))]}/>
                </div>
                <div className='overlay-text'>
                  <h3>{profile.name}</h3>
                    <p>
                      <Link to='/profile'
                      state={{profile}}>view their collection</Link>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          </>
      :
        <p className='text-center'>loading</p>
      }
      </div>
    </main>
  )
}

export default Profiles