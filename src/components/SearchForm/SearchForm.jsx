import { useState } from 'react'
import './SearchForm.scss';

const SearchForm = (props) => {
  const [formData, setFormData] = useState({query: ''})

  const handleSetSearch = evt => {
    setFormData({...formData, [evt.target.name] : evt.target.value})
  }


  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleRecordSearch(formData)
  }
  return (
    <>
      <div className="searchbar">
        {/* <form className="search" onSubmit={handleSubmitSearch}>
        <input onChange={props.handleSetSearch} value={props.search} name="query" type="search" placeholder="Search" />
        </form> */}
        <div className="container" onSubmit={handleSubmit}>
          <input onChange={handleSetSearch} value={formData.query} name="query" type="search" placeholder="Search Album or Artist..." />
          <div className="search"></div>
        </div>
      </div>
    </>
  )
}

export default SearchForm