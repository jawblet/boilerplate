import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFindUser() {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const findUser = async () => {
       return axios.get('/auth').then(res =>{
         setUser(res.data.currentUser);
         setLoading(false);
        }
        ).catch(err => { 
            isLoading(false);
            console.log(err)});
    };
    
    return {
        findUser,
        user,
        setUser,
        isLoading
    }
}