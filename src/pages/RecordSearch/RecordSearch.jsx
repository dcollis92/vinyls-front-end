import './RecordSearch.scss';
import { useState, useEffect } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import { getAllRecords } from '../../services/recordService';
import Record from '../../components/Record/Record';
import {Card} from 'react-bootstrap'

const RecordSearch = ({records}) => {
  const [searchResults, setSearchResults] = useState([])

  
  useEffect(()=> {
    const results = records.filter(record => record.type === "master" || record.type === "artist" )
    setSearchResults(results)
  }, [records])

  return (
    <main>
      <div className='search-display container'>
        <div className='row'>
          <div className></div>
        <h3>Search Results</h3>
        {records.length ?
          <>
            {console.log(searchResults)}
            {searchResults.map(record =>     
              <Card className='container'>
                <Card.Img variant="top" src="" />
                <Card.Body>
                <Record key={record.title} record={record} />
                </Card.Body>
              </Card>       
              
            )}
          </>
          :
          <h2>No Matching Records</h2>
        
        }
        </div>
      </div>
    </main>
  );
}

export default RecordSearch;