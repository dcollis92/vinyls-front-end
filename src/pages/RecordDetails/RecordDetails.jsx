import { useLocation } from 'react-router-dom'

const RecordDetails = () => {
  const location = useLocation()
  const record = location.state.record

  return (
    <>
    <h2>{record.title}</h2>
      <img src={record.cover_image} alt=""/>
      <h3>
        {record.title}        
      </h3>    
    </>
  )
} 

export default RecordDetails;