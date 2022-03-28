import { useLocation } from 'react-router-dom'

const RecordDetails = () => {
  const location = useLocation()
  const record = location.state.record

  return (
    <>
    <h2>{record.title}</h2>
      <img alt='' src={record.cover_image} />
      <h3>
        {record.title}        
      </h3>    
    </>
  )
} 

export default RecordDetails;