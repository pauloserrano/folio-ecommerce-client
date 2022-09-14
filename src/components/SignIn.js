import { Link, useNavigate } from "react-router-dom"
import Form from "../common/Form"
import useForm from "../hooks/useForm"
import useGlobalContext from "../hooks/useGlobalContext"
import { signIn } from "../services/axios"
import { LoginWrapper } from "../styles"

const SignIn = () => {
    const navigate = useNavigate()
    const { setUser } = useGlobalContext()
    const [form, handleForm] = useForm({
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await signIn({ ...form })
            setUser(user => ({
                ...user,
                token: response.data.token
            }))
            navigate('/')
            
        } catch (error) {
            alert(error.response.data)
        }
    }

  return (
    <LoginWrapper>
        <h1>Fólio</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Fields>
                <input required type="email" name="email" placeholder="Email" value={form.email} onChange={handleForm} />
                <input required type="password" name="password" placeholder="Password" value={form.password} onChange={handleForm} />
            </Form.Fields>
            <button type="submit">Login</button>
        </Form>
        <Link to="/signup">Create an account</Link>
    </LoginWrapper>
  )
}

export default SignIn