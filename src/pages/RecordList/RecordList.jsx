import { useState, useEffect } from 'react'
import * as recordService from '../../services/recordService'


const RecordList = (props) => {
  const [records, setRecords] = useState([])
  
  useEffect(() => {
    recordService.getAllRecords()
    .then(records => console.log(records))
  })
  return (  
    <>
      <h2>Records</h2>
    </>
  );
}
 
export default RecordList;