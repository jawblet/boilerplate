import { useState } from 'react';
import axios from 'axios';

export default function useSubmit() {
    const [error, setError] = useState(null);

    async function submitValues(path, values) {
        return axios.post(`${path}`, 
            values
            ).then(res => {
            return res; 
        }).catch(err => {
            setError(err.response.data.messages);
        });
    }

    return {
        submitValues,
        error
    }
}
