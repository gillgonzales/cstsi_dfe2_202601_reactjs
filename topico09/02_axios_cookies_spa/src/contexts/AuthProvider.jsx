/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect, useRef } from "react"
import { axiosClient, BASE_URL } from "../utils/axios-client";

const VEIRIFY_USER_INTERVAL = import.meta.env.VITE_VEIRIFY_USER_INTERVAL

console.error(VEIRIFY_USER_INTERVAL)

const verifyUser = async () => {
    try {
        const { data } = await axiosClient.get('/user')
        if (!data) throw new Error("Erro ao recuperar usuário!"); 7
        console.log({ data })
        return data;
    } catch (error) {
        const { response } = error;
        response?.status === 401 && clearAuthStorages();
        console.error('Error:', error);
        throw error;
    }
}

const clearAuthStorages = () => {
    console.log('clear')
    console.log('CURRENT_USER')
    localStorage.removeItem('CURRENT_USER');
}

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

    const [user, _setUser] = useState(() =>{

    // const user = JSON.parse(localStorage.getItem('CURRENT_USER'));
    // if(!user)
    return verifyUser().then(user=>{
        localStorage.setItem('CURRENT_USER',user)
        user && setIsLogged(true)
        return user;
    })
    .catch(error=>{
        console.error(error)
        return null
    })
})
    const [isLogged, setIsLogged] = useState(false)

    const intervalLogin = useRef(null);

    const setUser = (user) => {
        user && localStorage.setItem('CURRENT_USER', JSON.stringify(user))
        !user && clearAuthStorages();
        _setUser(user)
    }

    const auth = async (credentials) => {
        const csrfUrl = import.meta.env.VITE_API_HOST + `/sanctum/csrf-cookie`
        console.log({ csrfUrl })
        await axiosClient.get(csrfUrl)
        const response = await axiosClient.post("/login", credentials);
        if (response?.status !== 200) throw new Error(response.data);
        const { data } = response;
        console.log({ data });
        setUser(data.data);
        setIsLogged(true);
    }

    const verifyLogin = async () => {
        try {
            const user = await verifyUser()
            setUser(user)
            return true;
        } catch (error) {
            setUser(null)
            console.error(error)
            return false;
        }
    }

    const logOut = async () => {
        await axiosClient.post('logout')
        setIsLogged(false)
        clearAuthStorages()
        setUser(null)
    }

    useEffect(() => {
        async function fetchUser() {
            try {
                const user = await verifyUser();
                setUser(user)
            } catch (error) {
                console.error(error);
            }
        }
        fetchUser()
    }, []);

    useEffect(() => {
        console.log(user)
        if (user) {
            intervalLogin.current = setInterval(async () => {
                console.log("Verificando login...");
                console.log(user)
                const { isLogged } = await verifyLogin();
                !isLogged && clearAuthStorages();
            }, VEIRIFY_USER_INTERVAL)
        }

        return () => {
            clearInterval(intervalLogin.current);
        }
    }, [user]);

    return (
        <AuthContext.Provider value={{
            user,
            isLogged,
            auth,
            setUser,
            verifyLogin,
            logOut,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)
