import { useState } from "react";

const useForm = (initial={}) => {
    const [form, setForm] = useState(initial)

    const handleForm = ({ target: { value, name }}) => {
        setForm({
            ...form,
            [name]: value
        })
    }

    return [form, handleForm]
}

export default useForm