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
        <h2 className='text-center'>Album Details</h2>
        <div className='cover-display col'>
          <div className='album-cover'>
            <Record key={record.title} record={record} handleAddRecord={handleAddRecord} handleRemoveRecord={handleRemoveRecord} profile={profile} />
          </div>
          <div className='buttons'>
            <Button onClick={() => handleAddRecord(record)} 
              profile={profile} variant="outline-success">
              Add to Collection</Button>
            {/* <Button onClick={() => handleRemoveRecord
              (profile.records._id)} profile={profile} variant="outline-success">Remove</Button> */}
          </div>
        </div>
        <div className='details-display col'>
          <div className='categories'>
            <h3>Artist</h3>
            <h3>Album</h3>
            <h3>Year</h3>
            <h3>Label</h3>
            <h3>Track Listing</h3>
          </div>
          <div className='release-info'>
            <h3>Black Sabbath</h3>
            <h3>Black Sabbath</h3>
            <h3>1970</h3>
            <h3>Warner Bros</h3>
            <h3>Track Listing</h3>
              <ul>
                <li>Black Sabbath</li>
                <li>The Wizard</li>
                <li>N.I.B.</li>
                <li>Evil Woman</li>
                <li>Sleeping Village</li>
                <li>Warning</li>
              </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default RecordDetails;
