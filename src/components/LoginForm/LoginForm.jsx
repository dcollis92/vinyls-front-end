import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginForm.scss';
import * as authService from '../../services/authService'
import { Form, Button } from 'react-bootstrap'


const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <main className='login-form'>
      <div className='div'>
        <Form 
          autoComplete="off"
          onSubmit={handleSubmit}
          className='container'>
            <Form.Group className="mb-3">
            <Form.Label 
              htmlFor="email" 
              className='label'>
              Email Address
            </Form.Label>
            <Form.Control 
              type="email" 
              autoComplete="off"
              id="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
              placeholder="Enter Email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label 
                htmlFor="password"
                className='label'>
                Password
              </Form.Label>
              <Form.Control 
                type="password" 
                autoComplete="off"
                id="password"
                value={formData.pw}
                name="pw"
                onChange={handleChange}
                placeholder="Enter Password" />
            </Form.Group>
            <Button 
              className='button'
              variant="primary" 
              type="submit">
              Log In
            </Button>
            <Button className='button' 
              href="/">Cancel</Button>
        </Form>
      </div>
    </main>
  )
}

export default LoginForm
