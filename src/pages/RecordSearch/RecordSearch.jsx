import './RecordSearch.scss';
import { useState, useEffect } from 'react';
import Record from '../../components/Record/Record';
import Artist from '../../components/Artist/Artist';
import {Card} from 'react-bootstrap'

const RecordSearch = ({records}) => {
  const [searchResults, setSearchResults] = useState([])
  const [artistResults, setArtistResults] = useState([])

  
  useEffect(()=> {
    const results = records.filter(record => record.type === "master")
    setSearchResults(results)
  }, [records])

  useEffect(()=> {
    const results = records.filter(record => record.type === "artist")
    setArtistResults(results)
  }, [records])

  return (
    <main>
      <h3>Records</h3>
      {records.length ?
        <>
          {artistResults.map(record =>
              <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
              <Artist key={record.title} record={record} />
              </Card.Body>
            </Card> 
          )}
          {searchResults.map(record =>
              <Card>
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
    </main>
  );
}

export default RecordSearch;