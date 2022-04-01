import './Landing.scss';
import { Button, } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import * as profileService from '../../services/profileService'
import Profile from '../../components/Profile/Profile'
import Record from '../../components/Record/Record';
import StarRating from '../../components/StarRating/StarRating';

const Landing = ({handleRemoveRecord, user, userProfile}) => {

  const dogIds = [1025,1012,1062,1084,169,200,219,237,244,275,40,433,577,582,593,611,659,718,783,790,824,837,881,937,943]

  return (
    <main>
      {user?
        <>
          <div className='user-collection container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='section-header text-center'>
                  <div className='profile-img mx-auto'>
                    <Profile key={userProfile.name} profile={userProfile} randDogImgId={dogIds[Math.floor(Math.random()*(dogIds.length))]}/>
                  </div>
                  <h2>My Record Collection</h2>
                </div>
              </div>
            </div>
              <div className='row'>
                {userProfile?.records?.map(record =>
                  <div className='col-md-4 col-sm-6 col-xs-12'>
                    <div className='single-record'>
                      <div className='record-img'>
                        <Record handleRemoveRecord={handleRemoveRecord} profile={userProfile} key={record.id} id={record._id} record={record}/>
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
                    <div className='buttons'>
                    <StarRating />
                    <Button onClick={() => handleRemoveRecord(userProfile._id, record._id)} profile={userProfile} variant="outline-success">Remove</Button>
                    </div>   
                  </div>       
                )}
              </div>
          </div>
        </>
        :
        <>
        <h2 className='text-center'>Welcome to VINYLS. Please Make an Account or Log In.</h2>

        </>
      }
    </main>
  ); 
}

export default Landing;