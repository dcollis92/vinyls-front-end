import { useState } from 'react'
import { getAllRecords } from '../../services/recordService';
import { useNavigate } from 'react-router-dom';
import './SearchForm.scss';

const SearchForm = (props) => {
  const [formData, setFormData] = useState({query: ''})
  const navigate = useNavigate()

  const handleRecordSearch = formData => {
    console.log('hitting');
    getAllRecords(formData)
    .then(recordResults => setFormData(recordResults.results))
  }

  const handleSetSearch = evt => {
    setFormData({...formData, [evt.target.name] : evt.target.value})
  }

  const handleSubmitSearch = evt => {
    console.log(formData.query);
    evt.preventDefault()
    handleRecordSearch(formData)
    navigate('/recordSearch')
  }
  return (
    <>
      <div className="searchbar">
        {/* <form className="search" onSubmit={handleSubmitSearch}>
        <input onChange={props.handleSetSearch} value={props.search} name="query" type="search" placeholder="Search" />
        </form> */}
        <div className="container" >
          <form onSubmit={handleSubmitSearch}>
          <input onChange={handleSetSearch} value={formData.query} name="query" type="search" placeholder="Search Album or Artist..." />
          </form>
          <div className="search"></div>
        </div>
      </div>
    </>
  )
}

export default SearchForm