/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect, useRef } from "react"
import axiosClient from "../utils/axios-client";


const VEIRIFY_USER_INTERVAL = 3000

const verifyUser = async () => {
    try {
        const { data } = await axiosClient.get('/token/user')
        if (!data?.name) throw new Error("Erro ao recuperar usuário!");
        return data;
    } catch (error) {
        const { response } = error;
        clearAuthStorages();
        console.error('Error:', response.data.message);
        return null
    }
}

const clearAuthStorages = () => {
    console.log('clear')
    localStorage.removeItem('CURRENT_USER')
}

const parseUser = () => {
    try {
        const user = JSON.parse(localStorage.getItem('CURRENT_USER'));
        return user;
    } catch (error) {
        console.error(error)
        return null
    }
}


const AuthContext = createContext({
    user: {},
    token: null,
    setUser: () => { },
    setToken: () => { }
})

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(parseUser)
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))
    const intervalLogin = useRef()

    const setToken = (token) => {
        _setToken(token)
        if (!token) {
            localStorage.removeItem('ACCESS_TOKEN', token);
            localStorage.removeItem('CURRENT_USER');
            setUser(null);
            return;
        }
        localStorage.setItem('ACCESS_TOKEN', token);
    }

    const auth = async (payload) => {
        const response =
        await axiosClient.post("/token/login", payload);
        const { data } = response;
        alert("Usuário logado");
        console.log('user', data.data)
        setToken(data.token);
        setUser(data.data);
        localStorage.setItem(
            'CURRENT_USER',
            JSON.stringify(data.data)
        );
    }

    useEffect(() => {
        token && !user && verifyUser()
            .then(user => setUser(user))
            .catch((error) => {
                console.error(error)
                setToken(null)
            })
    }, [token]);

    useEffect(() => {
        console.log(user)
        if (user) {
            intervalLogin.current = setInterval(async () => {
                console.log("Verificando login...");
                const user = await verifyUser();
                if (!user) setToken(null)
                console.log(user)
                setUser(user)
            }, VEIRIFY_USER_INTERVAL)
        }

        return () => {
            clearInterval(intervalLogin.current);
        }
    }, [user]);


    return (
        <AuthContext.Provider value={{
            user,
            token,
            auth,
            setUser,
            setToken
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)
