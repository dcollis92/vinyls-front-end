import { useState, useEffect } from 'react'
import Record from '../../components/Record/Record'

const RecordList = (records, handleRemoveRecord, handleAddRecord, profile) => {
  const [search, setSearch] = useState({query: ''})
  const [records, setRecords] = useState([])
  
  useEffect(() => {
    const results = records.filter(record => record.title.toLowerCase().include(search.query))
    recordService.getAllRecords()
    setSearchResults(results)
  },[search])

  const handleSearch = evt => {
    setSearch({...search, [evt.target.name]: evt.target.value.toLowerCase()})
  }

  return (
    <>
      <h2>Record List</h2>
      <input 
        type="text"
        name="query" 
        value={search.query}
        onChange={handleSearch}
      />
      
      {search.query ? 
      <>
        <div className='record-container'>
          {searchResults.map(record =>
            <Record handleRemoveRecord={handleRemoveRecord} profile={profile} handleAddRecord={handleAddRecord} key={record.id} record={record}/>  
          )}
        </div>
      </>
      :
      <>
        <div className='record-container'>
          {villagers.map(record =>
            <Record handleRemoveRecord={handleRemoveRecord} profile={profile} handleAddRecord={handleAddRecord} key={record.id} record={record}/>  
          )}
        </div>
      </>

      }
    </>
  );
}

export default RecordList;
