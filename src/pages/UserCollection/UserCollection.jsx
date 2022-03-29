import './UserCollection.scss';
import { useState, useEffect } from 'react'
import Record from '../../components/Record/Record'

const UserCollection = (records, handleRemoveRecord, handleAddRecord, profile) => {
  const [search, setSearch] = useState({query: ''})
  const [records, setRecords] = useState([])
  
  // useEffect(() => {
  //   const results = records.filter(record => record.title.toLowerCase().include(search.query))
  //   recordService.getAllRecords()
  //   setSearchResults(results)
  // },[search])

  const handleSearch = evt => {
    setSearch({...search, [evt.target.name]: evt.target.value.toLowerCase()})
  }
// WUT DIS TIMMY???? I CANT NO STYLE NO THANG

  return (
    <main className='user-collection'>
      <h2>Record Collection</h2>
      <input 
        type="text"
        name="query" 
        value={search.query}
        onChange={handleSearch}
      />
    
      {search.query ? 
      <>
        <div className=''>
          {searchResults.map(record =>
            <Record handleRemoveRecord={handleRemoveRecord} profile={profile} handleAddRecord={handleAddRecord} key={record.id} record={record}/>  
          )}
        </div>
      </>
      :
      <>
        <div className=''>
          {records.map(record =>
            <Record handleRemoveRecord={handleRemoveRecord} profile={profile} handleAddRecord={handleAddRecord} key={record.id} record={record}/>  
          )}
        </div>
      </>
      }
    </main>
  );
}

export default UserCollection;
