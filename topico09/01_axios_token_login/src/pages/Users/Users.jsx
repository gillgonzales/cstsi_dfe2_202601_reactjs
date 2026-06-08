import React, { useState } from 'react'
import axiosClient from '../../utils/axios-client'
import { useEffect } from 'react'

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const loadUsers = async () => {
            try {
                const response = await axiosClient.get('/users')
                console.log(response.data)
                setUsers(response.data.data)
            } catch (error) {
                console.error(error)
            }
        }
        loadUsers();
    }, [])
    if (!users.length) return <p>Carregando...</p>
    return (<>
        <h1>Users</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0
                        ? users.map((user, k) =>
                            <tr key={k}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                        : <></>
                    }
                </tbody>
            </table>
        </div>
    </>
    )
}

export default Users