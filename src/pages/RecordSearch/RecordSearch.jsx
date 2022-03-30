import './RecordSearch.scss';
import { useState, useEffect } from 'react';
import Record from '../../components/Record/Record';
import Artist from '../../components/Artist/Artist';
// import { Card } from 'react-bootstrap'

const RecordSearch = ({records, handleAddRecord}) => {
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
      <div className='search-display container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='section-header text-center'>
              <h1>Search Results</h1>
            </div>
          </div>
        </div>
          {records.length ?
        <>
          <div className='section-header text-center'>
          <h2>Artists</h2>
          </div>
          <div className='row'>
          {artistResults.map(record =>
            // <div className=''>
              <div className='col-md-4 col-sm-6 col-xs-12'>
                <div className='single-record'>
                  <div className='record-img'>
                    <Artist key={record.title} record={record} />
                  </div>
                </div>
                <div className='overlay-text'>
                  <h3> {record.title} </h3>
                </div>
                {/* <button onClick={() => handleAddRecord(record)}
      className="btn">Add to Collection</button> */}
              </div>
            // </div> 
          )}
          </div>
          <div className='section-header text-center'>
          <h2>Records</h2>
          </div>
          <div className='row'>
          {searchResults.map(record =>
            // <div className=''>
              <div className='col-md-4'>
                <div className='single-record'>
                  <div className='record-img'>
                    <Record key={record.title} record={record} handleAddRecord={handleAddRecord}/>
                  </div>
                </div>
                <div className='overlay-text'>
                  <h3>Hello</h3>
                </div>
              </div>
            // </div> 
          )}
          </div>
        </>
        :
        <h2 className='text-center'>No Matching Records</h2>
      
      }
        
      </div>
    </main>
  );
}

export default RecordSearch;


/*
OLD BOOTSTRAP CARD CODE, SOON TO BE DELETED
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
*/