import './RecordDetails.scss';
import { useLocation } from 'react-router-dom'
import Record from '../../components/Record/Record';

const RecordDetails = ({handleAddRecord, profile, handleRemoveRecord}) => {
  const location = useLocation()
  const record = location.state.record
  console.log(profile.records)

  return (
    <main className='record-details'>
      <Record key={record.title} record={record} handleAddRecord={handleAddRecord} handleRemoveRecord={handleRemoveRecord} profile={profile} />
    </main>
  )
}

export default RecordDetails;
