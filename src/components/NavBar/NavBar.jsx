import { Link } from 'react-router-dom'
import SearchForm from '../SearchForm/SearchForm'
import * as recordService from '../../services/recordService'
import { Nav, Navbar, Container }  from 'react-bootstrap'

const NavBar = (props) => {

  // const handleSubmitSearch = evt => {
  //   evt.preventDefault()
  //   props.handleSubmitSearch()
  // }
  return (
    <main>
      {props.user ?
        <Navbar collapseOnSelect expand="xl" bg="
        #dfe6ed" >
        <Container>
        <Navbar.Brand href="/">
          <img alt="" src="./vinyls-logo.png"
          width="100%"
          // height=""
          className="d-inline-block align-top"
        />{' '}</Navbar.Brand>
        <SearchForm handleSubmitSearch={props.handleSubmitSearch} handleSetSearch={props.handleSetSearch}  />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/recordlist">Records</Nav.Link>
            <Nav.Link href="/profiles">Profiles</Nav.Link>
            <Nav.Link href="/changePassword">Change Password</Nav.Link>
            <Nav.Link href="" onClick={props.handleLogout}>Log Out</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
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
