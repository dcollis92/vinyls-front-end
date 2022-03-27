import { Link } from 'react-router-dom'
import SearchForm from '../SearchForm/SearchForm'
import * as recordService from '../../services/recordService'

const NavBar = (props) => {

  // const handleSubmitSearch = evt => {
  //   evt.preventDefault()
  //   props.handleSubmitSearch()
  // }
  return (
    <main>
      {props.user ?
        <nav>
            <p>Welcome, {props.user.name}</p>
            <a><Link to="/recordlist">Records</Link></a>
            <a><Link to="/profiles">Profiles</Link></a>
            <a><Link to="/changePassword">Change Password</Link></a>
            <a><Link to="" onClick={props.handleLogout}>LOG OUT</Link></a>
            <SearchForm />
            {/* <form className="search" onSubmit={handleSubmitSearch}>
              <input onChange={props.handleSetSearch} value={props.search} name="query" type="search" placeholder="Search" />
            </form>
            <div className="container">
            <input type="text" placeholder="Search Album or Artist..." />
            <div className="search"></div> */}
          {/* </div> */}
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </main>
  )
}

export default NavBar 
