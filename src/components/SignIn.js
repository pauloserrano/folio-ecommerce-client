import { Link } from "react-router-dom"
import Form from "../common/Form"
import useForm from "../hooks/useForm"
import { LoginWrapper } from "../styles"

const SignIn = () => {
    const [form, handleForm] = useForm({
        email: '',
        password: ''
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
                <input required type="email" name="email" placeholder="Email" value={form.email} onChange={handleForm} />
                <input required type="password" name="password" placeholder="Password" value={form.password} onChange={handleForm} />
            </Form.Fields>
            <button type="submit">Submit</button>
        </Form>
        <Link to="/signup">Create an account</Link>
    </LoginWrapper>
  )
}

export default SignIn