import './SearchForm.scss';

const SearchForm = (props) => {

  const handleSubmitSearch = evt => {
    evt.preventDefault()
    props.handleSubmitSearch()
  }
  return (
    <>
      <div className="searchbar">
        {/* <form className="search" onSubmit={handleSubmitSearch}>
        <input onChange={props.handleSetSearch} value={props.search} name="query" type="search" placeholder="Search" />
        </form> */}
        <div className="container">
          <input type="text" placeholder="Search Album or Artist..." />
          <div className="search"></div>
        </div>
      </div>
    </>
  )
}

export default SearchForm