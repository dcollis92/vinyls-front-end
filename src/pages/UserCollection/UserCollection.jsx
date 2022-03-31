import './UserCollection.scss';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Profile from '../../components/Profile/Profile'

const UserCollection = () => {
  
  const location = useLocation()
  const profile = location.state.profile
  
  return (
    <>
      <h2>Record Collection</h2>
      <div>
        <Profile key={profile.name} />
        <h2>{profile.name}</h2>
      </div>



      {/* <div>
  
        <div className=''>
          {profile?.records?.map(record =>
          <>
          <Record handleRemoveRecord={handleRemoveRecord} handleAddRecord=
          {handleAddRecord} profile={profile} key={record.id} id={record._id} record={record}/>
            
          <Button onClick={() => handleRemoveRecord(profile._id, record._id)} profile={profile} variant="outline-success">Remove</Button>          
          </>
          )}
          
        </div>
        
      </div>   */}
    </>
  ); 
}

export default UserCollection;
