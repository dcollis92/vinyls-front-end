import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignupForm.scss';
import * as authService from '../../services/authService'
import { Form, Button } from 'react-bootstrap'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <main className='signup-form'>
      <div className='div'>
        <Form 
          autoComplete="off"
          onSubmit={handleSubmit}
          className='container'>
            <Form.Group className="mb-3">
            <Form.Label 
              htmlFor="name" 
              className='label'>
              Username</Form.Label>
            <Form.Control 
              type="text" 
              autoComplete="off"
              id="name"
              value={name}
              name="name"
              onChange={handleChange}
              placeholder="Enter Username" />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label 
              htmlFor="email" 
              className='label'>
              Email Address</Form.Label>
            <Form.Control 
              type="email" 
              autoComplete="off"
              id="email"
              value={email}
              name="email"
              onChange={handleChange}
              placeholder="Enter Email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label 
                htmlFor="password"
                className='label'>
                Password</Form.Label>
              <Form.Control 
                type="password" 
                autoComplete="off"
                id="password"
                value={password}
                name="password"
                onChange={handleChange}
                placeholder="Enter Password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label 
                htmlFor="confirm"
                className='label'>
                Password</Form.Label>
              <Form.Control 
                type="password" 
                autoComplete="off"
                id="confirm"
                value={passwordConf}
                name="passwordConf"
                onChange={handleChange}
                placeholder="Re-Enter Password" />
            </Form.Group>
            <Button 
              disabled={isFormInvalid()} 
              className='button'
              variant="primary" 
              type="submit">
              Sign Up</Button>
            <Button className='button'
              href="/">Cancel</Button>
        </Form>
      </div>
    </main> 
  )
}

export default SignupForm
