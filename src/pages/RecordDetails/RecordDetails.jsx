import { useLocation } from 'react-router-dom'

const RecordDetails = () => {
  const location = useLocation()
  const record = location.state.record

  return (
    <>
    <div className="record">
      <h3>
        {record.title}
        {record.artists}
      </h3>
    </div>
    </>
  )
} 

export default RecordDetails;