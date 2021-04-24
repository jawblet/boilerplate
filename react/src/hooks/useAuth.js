import { useContext } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext';

export default function useAuth() {
    const { setUser } = useContext(UserContext); 

    const handleAuth = async () => {
        return axios.get('/auth').then(res =>{
            setUser(res.data.currentUser);
           }
        ).catch(err => { console.log(err)});
    }

    return {
        handleAuth
    }
}