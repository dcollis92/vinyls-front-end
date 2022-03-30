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
      <div className='album-display'>
        <h2 className='text-center'>Album Details</h2>
        <div className='album'>
          <Record key={record.title} record={record} handleAddRecord={handleAddRecord} handleRemoveRecord={handleRemoveRecord} profile={profile} />
        </div>
        <div className='buttons'>
          <Button onClick={() => handleAddRecord(record)} 
            profile={profile} variant="outline-success">
            Add to Collection</Button>
          <Button onClick={() => handleRemoveRecord
            (profile.records._id)} profile={profile} variant="outline-success">Remove</Button>
        </div>
      </div>
    </main>
  )
}

export default RecordDetails;
