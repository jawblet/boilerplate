import { useState, useContext } from 'react'; 
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext';  

export default function useForm({ initialValues }) {
    let history = useHistory();
    const { setUser } = useContext(UserContext);
    const [values, setValues] = useState(initialValues || {});
    const [error, setError] = useState(null);

    //track form values
    const handleChange = event => {
        const value = event.target.value; 
        const name = event.target.name;

        setValues({
            ...values,
            [name]: value
        }); 
    };

    //register user  
    const registerUser = async (formValues) => {
        const dataObject = formValues.values; 
        const { username, email, password, passwordConfirm } = dataObject;
        try {
            await axios({
                method: 'POST',
                url: `auth/register`, 
                data: {
                  username,
                  email,
                  password,
                  passwordConfirm
                }
            }).then(res => {
                    console.log(res);
                    const username = res.data.data.user.username;
                    setUser(username); 
                    history.push('/home'); 
                })
            } catch(err) {
                 console.log(err);
                 setError(err.response.data);
            }
      };


    return {
        handleChange,
        values,
        error
    }
}