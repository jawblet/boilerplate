import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFindUser() {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function onLoad() {
            return axios.get('/auth').then(res => {
                setUser(res.data.currentUser);
                setLoading(false);
               }).catch(err => { 
                  setLoading(false);
                  console.log(err)
                });
        }

        onLoad();
    }, []);
  
    return {
        user,
        setUser,
        isLoading
    }
}