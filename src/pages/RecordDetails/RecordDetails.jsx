import { useLocation } from 'react-router-dom'
import Record from '../../components/Record/Record';

const RecordDetails = () => {
  const location = useLocation()
  const record = location.state.record

  return (
    <>
      <Record key={record.title} record={record} />
    </>
  )
}

export default RecordDetails;