import { FormWrapper } from "../styles"

const Form = ({ children, ...otherProps }) => {
  return (
    <FormWrapper {...otherProps}>
        { children }
    </FormWrapper>
  )
}

Form.Fields = ({ children }) => {
    return <>{ children }</>
}

export default Form