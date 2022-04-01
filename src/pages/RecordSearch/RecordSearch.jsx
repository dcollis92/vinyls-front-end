import './RecordSearch.scss';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { Button } from 'react-bootstrap'
import Record from '../../components/Record/Record';
import Artist from '../../components/Artist/Artist';

const RecordSearch = ({records, handleAddRecord, handleRemoveRecord, profile}) => {

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
            <div className='results-header text-center'>
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
          {artistResults.map((record, idx) =>
              <div className='col-md-4 col-sm-6 col-xs-12' key={idx}>
                <div className='single-record'>
                  <div className='record-img'>
                    <Artist key={record.title} record={record} />
                  </div>
                  <div className='overlay-text'>
                    <h3>{record.title}</h3>
                    <p>
                      {/* <Link
                      to='/artist'
                      state={{record}}
                      className='card-link'>
                      click here</Link> */}
                      </p>
                  </div>
                </div>
              </div>
          )}
          </div>
          <div className='section-header text-center'>
          <h2>Records</h2>
          </div>
          <div className='row'>
            {searchResults.map((record, idx) =>
              <div className='col-md-4 col-sm-6 col-xs-12 text-center' key={idx}> 
                <div className='single-record'>
                  <div className='record-img'>
                    <Record key={record.title} record={record} handleAddRecord={handleAddRecord}
                    handleRemoveRecord={handleRemoveRecord}/>
                  </div>
                  <div className='overlay-text'>
                    <h3>{record.title}</h3>
                      <p>
                        <Link to='/record'
                        state={{record}}
                        className='card-link'>
                        click here</Link>
                      </p>
                  </div>
                </div>
              </div>
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
