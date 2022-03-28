import { Link } from 'react-router-dom'
import SearchForm from '../SearchForm/SearchForm'
import * as recordService from '../../services/recordService'
import { Nav, Navbar, Button, Container }  from 'react-bootstrap'
import './NavBar.scss';

const NavBar = (props) => {

  // const handleSubmitSearch = evt => {
  //   evt.preventDefault()
  //   props.handleSubmitSearch()
  // }
  return (
    <main>
      {props.user ?
        <Navbar className='navbar' collapseOnSelect expand="xl" >
        <Container>
        <Navbar.Brand href="/">
          <img alt="" src="./vinyls-logo.png"
          width="100%"
          className="d-inline-block align-top"
        />{' '}</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/recordlist">Records</Nav.Link>
            <Nav.Link href="/profiles">Profiles</Nav.Link>
            <Nav.Link href="/changePassword">Change Password</Nav.Link>
            <Nav.Link href="" onClick={props.handleLogout}>Log Out</Nav.Link>
          </Nav>
          <SearchForm handleSubmitSearch={props.handleSubmitSearch} handleSetSearch={props.handleSetSearch} />
        </Navbar.Collapse>
        </Container>
      </Navbar>
      :
      <Navbar className='navbar' collapseOnSelect expand="xl" bg="lavender" >
        <Container>
        <Navbar.Brand href="/">
          <img alt="" src="./vinyls-logo.png"
          width="100%"
          className="d-inline-block align-top"
        />{' '}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/login">Log In</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      }
    </main>
  )
}

export default NavBar 
