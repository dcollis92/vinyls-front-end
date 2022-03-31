import './UserCollection.scss';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react'

import Record from '../../components/Record/Record'

const UserCollection = ({records, handleRemoveRecord, handleAddRecord, profile}) => {
  
  console.log(profile)
  console.log(profile.records)

  
  

  return (
    <>
      <h2>Record Collection</h2>
      <div>
  
        <div className=''>
          {profile?.records?.map(record =>
          <>
          <Record handleRemoveRecord={handleRemoveRecord} profile={profile} key={record.id} id={record._id} record={record}/>
            
          <Button onClick={() => handleRemoveRecord=(profile._id, record._id)} profile={profile} key={record.id} id={record._id} record={record}variant="outline-success">Remove</Button>          
          </>
          )}
          
        </div>
        
      </div>  
    </>
  ); 
}

export default UserCollection;
