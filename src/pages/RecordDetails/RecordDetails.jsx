import './RecordDetails.scss';
import { useLocation } from 'react-router-dom'
import Record from '../../components/Record/Record';

const RecordDetails = () => {
  const location = useLocation()
  const record = location.state.record

  return (
    <main className='record-details'>
      <Record key={record.title} record={record} />
      
    </main>
  )
}

export default RecordDetails;