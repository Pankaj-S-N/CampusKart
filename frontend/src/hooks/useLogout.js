import { useState } from "react";

import { useAuthContext} from './useAuthContext'

export const useLogout = () => {

    // const [error, setError] = useState(null)
    // const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
    
    const logout = async (email,password) => {
        //remove user from storaeg
        localStorage.removeItem('user')

        //dispatch logout
        dispatch({type: 'LOGOUT'})
    }
    //     setIsLoading(true)
    //     setError(null)

    //     const response = await fetch('/api/user/signup', {
    //         method: 'POST',
    //         headers: {'Content-type': 'application/json'},
    //         body: JSON.stringify({email, password})
    //     })

    //     const json = await response.json()

    //     if(!response.ok){
    //         setIsLoading(false)
    //         setError(json.error)
    //     }
    //     if(response.ok){
    //         //saving the user to local storage
    //         localStorage.setItem('user', JSON.stringify(json))

    //         // update authContext
    //         dispatch({type: 'LOGIN', payload: json})

    //         setIsLoading(false)
    //     }
    // }
    return logout
}