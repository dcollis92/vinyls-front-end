import './UserCollection.scss';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react'

import Record from '../../components/Record/Record'

const UserCollection = ({records, handleRemoveRecord, handleAddRecord, profile}) => {
  
  console.log(profile._id)
  
  
  

  return (
    <main>
      <div className='user-collection container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='results-header text-center'>
              <h1>Record Collection</h1>
            </div>
          </div>
        </div>
        <div className='row'>
          {profile?.records?.map(record =>
          <>
          <Record handleRemoveRecord={handleRemoveRecord} profile={profile} key={record.id} id={record._id} record={record}/>
            
          <Button onClick={() => handleRemoveRecord(profile._id, record._id)} profile={profile} variant="outline-success">Remove</Button>          
          </>
          )}
        </div>
    
      </div> 
    </main>
  ); 
}

export default UserCollection;
