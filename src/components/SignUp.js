import { Link, useNavigate } from 'react-router-dom'
import Form from '../common/Form'
import useForm from '../hooks/useForm'
import useGlobalContext from '../hooks/useGlobalContext'
import { LoginWrapper } from '../styles'
import { signUp } from '../services/axios'

const SignUp = () => {
    const navigate = useNavigate()
    const { setUser } = useGlobalContext()
    const [form, handleForm] = useForm({
        name: '',
        email: '',
        password: '',
        passwordAuth: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (form.password !== form.passwordAuth){
            // Todo: create a custom Alert component for this
            alert('Password does not match')
            return
        }

        try {
            await signUp({...form})
            navigate('/signin')
            
        } catch (error) {
            alert(error.response.data)
        }
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