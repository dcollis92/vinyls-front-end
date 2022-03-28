import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './ChangePasswordForm.module.css'
import * as authService from '../../services/authService'
import { Form, Button } from 'react-bootstrap'

const ChangePasswordForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    pw: '',
    newPw: '',
    newPwConf: '',
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
      await authService.changePassword(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { pw, newPw, newPwConf } = formData

  const isFormInvalid = () => {
    return !(pw && newPw && newPw === newPwConf)
  }

  return (
    <main>
      <Form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={styles.container}>
        <Form.Group className="mb-3">
          <Form.Label 
            htmlFor="password" 
            className={styles.label}>
            Current Password</Form.Label>
          <Form.Control 
            type="password" 
            autoComplete="off"
            id="password"
            value={pw}
            name="pw"
            onChange={handleChange}
            placeholder="Enter Current Password" />  
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label 
            htmlFor="newPassword" 
            className={styles.label}>
            New Password</Form.Label>
          <Form.Control 
            type="password" 
            autoComplete="off"
            id="newPassword"
            value={newPw}
            name="newPw"
            onChange={handleChange}
            placeholder="Enter New Password" />  
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label 
            htmlFor="newPasswordConf" 
            className={styles.label}>
            New Password</Form.Label>
          <Form.Control 
            type="password" 
            autoComplete="off"
            id="newPasswordConf"
            value={newPwConf}
            name="newPwConf"
            onChange={handleChange}
            placeholder="Re-Enter New Password" />  
        </Form.Group>
        <Button 
          disabled={isFormInvalid()} 
          className={styles.button}
          variant="primary" 
          type="submit">
          Change Password</Button>
        <Button href="/">Cancel</Button>
      </Form>
    </main>
  )
}

export default ChangePasswordForm
