import './UserCollection.scss';
import { useState, useEffect } from 'react'
import Record from '../../components/Record/Record'

const UserCollection = ({records, handleRemoveRecord, handleAddRecord, profile}) => {
  console.log(profile)

  return (
    <>
      <h2>Record Collection</h2>
  
        <div className=''>
          {profile.records.map(record =>
            <Record handleRemoveRecord={handleRemoveRecord} profile={profile} handleAddRecord={handleAddRecord} key={record.id} record={record}/>  
          )}
        </div>
    </>
  );
}

export default UserCollection;
