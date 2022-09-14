import { Link } from 'react-router-dom'
import Form from '../common/Form'
import useForm from '../hooks/useForm'
import { LoginWrapper } from '../styles'

const SignUp = () => {
    const [form, handleForm] = useForm({
        name: '',
        email: '',
        password: '',
        passwordAuth: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }

  return (
    <LoginWrapper>
        <h1>Fólio</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Fields>
                <input required type="text" name="name" placeholder="Name" value={form.name} onChange={handleForm} />
                <input required type="email" name="email" placeholder="Email" value={form.email} onChange={handleForm} />
                <input required type="password" name="password" placeholder="Password" value={form.password} onChange={handleForm} />
                <input required type="password" name="passwordAuth" placeholder="Confirm Password" value={form.passwordAuth} onChange={handleForm} />
            </Form.Fields>
            <button type="submit">Create Account</button>
        </Form>
        <Link to="/signin">Already has an account? Sign-In</Link>
    </LoginWrapper>
  )
}

export default SignUp