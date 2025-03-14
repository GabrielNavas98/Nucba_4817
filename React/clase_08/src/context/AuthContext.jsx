import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const AuthContext = createContext()


const initialValues = {
    username: '',
    password: ''
}

const AuthProvider = ({ children }) => {

    const navigate = useNavigate()

    const [isAuth, setIsAuth] = useState(localStorage.getItem('user')) //ToDo initialValue
    const [form, setForm] = useState(initialValues)
    const [user, setUser] = useState(isAuth ? localStorage.getItem('user') : '') //ToDo initialValue

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!form.username.trim() || !form.password.trim()) {
            alert('ingresa los datos')
            return
        }

        setForm(initialValues)
        setUser(form.username)
        setIsAuth(true)

        localStorage.setItem('user', form.username)

        navigate(`/user/${form.username}`)
    }

    const handleLogout = () => {
        localStorage.removeItem('user')
        navigate('/login')
        setIsAuth(false)
        setUser('')
    }

    const data = {
        isAuth,
        form,
        user,
        handleChange,
        handleSubmit,
        handleLogout
    }

    return <AuthContext.Provider value={data}>
        { children }
    </AuthContext.Provider>
}

export default AuthProvider