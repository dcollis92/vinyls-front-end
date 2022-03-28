import { useState } from 'react'
import { getAllRecords } from '../../services/recordService';

import './SearchForm.scss';
import {Button, Form, FormControl} from 'react-bootstrap'

const SearchForm = (props) => {
  // const [formData, setFormData] = useState({query: ''})
  // const navigate = useNavigate()

  // const handleRecordSearch = queryString => {
  //   console.log('hitting');
  //   getAllRecords(queryString)
  //   .then(recordResults => setFormData(recordResults.results))
  // }

  // const handleSetSearch = evt => {
  //   setFormData({...formData, [evt.target.name] : evt.target.value})
  // }

  

  return (
    <>
    
      {/* <div className="searchbar">
        <div className="container" >
          <form onSubmit={handleSubmitSearch}>
          <input onChange={handleSetSearch} value={formData.query} name="query" type="search" placeholder="Search..." />
          <div className="search"></div>
          </form>
        </div>
      </div> */}
    </>
  )
}

export default SearchForm