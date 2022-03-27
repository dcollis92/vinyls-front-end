import { useState, useEffect } from 'react'
import * as recordService from '../../services/recordService'


// const RecordList = (props) => {
//   const [records, setRecords] = useState([])
  

//   useEffect(() => {
//     recordService.getAllRecords()
//     .then(recordData => setRecords(recordData.results))
//   },[])
//   return (  
//     <main>
//       <h2>Records</h2>
//     </main>
//   );
// }
 
// export default RecordList;