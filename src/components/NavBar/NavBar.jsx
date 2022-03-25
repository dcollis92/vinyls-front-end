import { Link } from 'react-router-dom'
import * as recordService from '../../services/recordService'

const NavBar = (props) => {

  const handleSubmitSearch = evt => {
    evt.preventDefault()
    props.handleSubmitSearch()
  }
  return (
    <>
      {props.user ?
        <nav>
          <ul>
            <li>Welcome, {props.user.name}</li>
            <li><Link to="/recordlist">Records</Link></li>
            <li><Link to="/profiles">Profiles</Link></li>
            <li><Link to="/changePassword">Change Password</Link></li>
            <li><Link to="" onClick={props.handleLogout}>LOG OUT</Link></li>
            <form className="search" onSubmit={handleSubmitSearch}>
              <input onChange={props.handleSetSearch} value={props.search} name="query" type="search" placeholder="Search" />
            </form>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar 
