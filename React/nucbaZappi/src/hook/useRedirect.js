import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const useRedirect = (redirecTo) => {
    const { currentUser} = useSelector(state => state.user)

    const navigate = useNavigate()

    useEffect(() => {
        if(currentUser){
            navigate(redirecTo)
        }
    }, [currentUser, navigate, redirecTo])
}

export default useRedirect