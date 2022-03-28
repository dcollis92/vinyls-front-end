import { useState } from 'react'
import { getAllRecords } from '../../services/recordService';
import { useNavigate } from 'react-router-dom';
import './SearchForm.scss';

const SearchForm = (props) => {
  const [formData, setFormData] = useState({query: ''})
  const navigate = useNavigate()

  const handleRecordSearch = queryString => {
    console.log('hitting');
    getAllRecords(queryString)
    .then(recordResults => setFormData(recordResults.results))
  }

  const handleSetSearch = evt => {
    setFormData({...formData, [evt.target.name] : evt.target.value})
  }

  const handleSubmitSearch = evt => {
    console.log(formData.query);
    evt.preventDefault()
    handleRecordSearch(formData.query)
    navigate('/recordSearch')
  }
  return (
    <>
      <div className="searchbar">
        <div className="container" >
          <form onSubmit={handleSubmitSearch}>
          <input onChange={handleSetSearch} value={formData.query} name="query" type="search" placeholder="Search..." />
          </form>
          <div className="search"></div>
        </div>
      </div>
    </>
  )
}

export default SearchForm