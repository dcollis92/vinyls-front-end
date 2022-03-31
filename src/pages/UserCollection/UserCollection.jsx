import './UserCollection.scss';
import { Button, } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
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
    <main>
      {currProfile?
        <>
          <div className='user-collection container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='section-header text-center'>
                  <Profile key={currProfile.name} />
                  <h2>{currProfile.name}'s Record Collection</h2>
                </div>
              </div>
            </div>
              <div className='row'>
                {currProfile?.records?.map(record =>
                  <div className='col-md-4 col-sm-6 col-xs-12'>
                    <div className='single-record'>
                      <div className='record-img'>
                        <Record handleRemoveRecord={handleRemoveRecord} profile={currProfile} key={record.id} id={record._id} record={record}/>
                      </div>
                      <div className='overlay-text'>
                        <h3>{record.title}</h3>
                          <p>
                            <Link to='/record'
                            state={{record}}
                            className='card-link'>
                            click here</Link>
                          </p>
                      </div>
                    </div>
                    <Button onClick={() => handleRemoveRecord(profile._id, record._id)} profile={profile} variant="outline-success">Remove</Button>   
                  </div>       
                )}
              </div>
          </div>
        </>
        :
        <>
        <div>loading....</div>
        </>
      }
    </main>
  ); 
}

export default UserCollection;
