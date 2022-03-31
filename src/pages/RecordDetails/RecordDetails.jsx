import './RecordDetails.scss';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import Record from '../../components/Record/Record';
import Artist from '../../components/Artist/Artist';


const RecordDetails = ({handleAddRecord, handleRemoveRecord, profile}) => {

  const location = useLocation()
  const record = location.state.record
  console.log(profile.records)

  return (
    <main className='record-details'>
      <div className='album-display row'>
        <h1 className='album-header text-center'>
          Album Details
        </h1>
        <div className='cover-display col-lg text-center'>
          <div className='single-record'>
            <div className='record-img'>
              <Record key={record.title} record={record} handleAddRecord={handleAddRecord} handleRemoveRecord={handleRemoveRecord} profile={profile} />
            </div>
          </div>
          <div className='star-rating'></div>
          <div className='buttons'>
            <Button onClick={() => handleAddRecord(record)} 
              profile={profile} variant="outline-success">
              Add to Collection</Button>
            {/* <Button onClick={() => handleRemoveRecord
              (profile.records._id)} profile={profile} variant="outline-success">Remove</Button> */}
          </div>
        </div>
        <div className='details-display col-lg'>
          <div className='categories'>
            <div className='artist'>
              <h3>Artist</h3>
            </div>
            <div className='album'>
              <h3>Album</h3>
            </div>
            <div className='year'>
              <h3>Year</h3>
            </div>
            <div className='label'>
              <h3>Label</h3>
            </div>
            <div className='tracklist'>
              <h3>Tracklist</h3>
            </div>
          </div>
          <div className='release-info'>
            <div className='artist'>
              <h3>Black Sabbath</h3>
            </div>
            <div className='album'>
              <h3>Album</h3>
            </div>
            <div className='year'>
              <h3>1970</h3>
            </div>
            <div className='label'>
              <h3>Warner Bros</h3>
            </div>
            <div className='tracklist'>
              <h6>Black Sabbath</h6>
              <h6>The Wizard</h6>
              <h6>N.I.B.</h6>
              <h6>Evil Woman</h6>
              <h6>Sleeping Village</h6>
              <h6>Warning</h6>
            </div>  
          </div>
        </div>
      </div>
    </main>
  )
}

export default RecordDetails;
