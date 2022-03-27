import { useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import { getAllRecords } from '../../services/recordService';
import RecordCover from '../../components/RecordCover/RecordCover';

const RecordSearch = (props) => {
  const [search, setSearch] = useState({query: ''})
  const [searchResults, setSearchResults] = useState({artists: [], albums: []})
  const [records, setRecords] = useState([])

  const handleRecordSearch = formData => {
    getAllRecords(formData)
    .then(recordResults => setRecords(recordResults.results))
  }

  return (
    <main>
      <h3>recids</h3>
      <SearchForm handleRecordSearch={handleRecordSearch} />
      {records.length ?
      <>
        {records.map(record =>
          <RecordCover key={record.title} record={record} />
        )}
      </>
      :
      <h3>search for a record, ya bish</h3>
      } 
  
    </main>
  );
}

export default RecordSearch;