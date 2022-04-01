import './UserCollection.scss';
import { Button, } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import * as profileService from '../../services/profileService'
import Profile from '../../components/Profile/Profile'
import Record from '../../components/Record/Record';
import StarRating from '../../components/StarRating/StarRating';

const dogIds = [1025,1012,1062,1084,169,200,219,237,244,275,40,433,577,582,593,611,659,718,783,790,824,837,881,937,943]

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
            <div className=''>
              <div className=''>
                <div className='section-header text-center'>
                  <div className ='profile-img mx-auto'>
                    <Profile key={currProfile.name} profile={profile} randDogImgId={dogIds[Math.floor(Math.random()*(dogIds.length))]}/>
                  </div>
                  <div className='user-info'>
                    <h2>{currProfile.name}'s Record Collection</h2>
                  </div>
                </div>
              </div>
            </div>
              <div className='row'>
                {currProfile?.records?.map(record =>
                  <div className='col-md-4 col-sm-6 col-xs-12 text-center'>
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
                    <div className='buttons mx-auto'>
                    <StarRating />
                    <Button onClick={() => handleRemoveRecord(profile._id, record._id)} profile={profile} variant="outline-success">Remove</Button>
                    </div>   
                  </div> 
                )}
              </div>
          </div>
        </>
        :
        <>
        <p>No records yet</p>
        </>
      }
    </main>
  ); 
}

export default UserCollection;
