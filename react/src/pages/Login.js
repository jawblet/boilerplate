import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import FormInput from './../components/FormInput';
import CTA from './../components/CTA';
import Prompt from './../components/Prompt';
import useForm from './../hooks/useForm';
import useSubmit from '../hooks/useSubmit';
import useAuth from '../hooks/useAuth';

export default function Login() {
    const history = useHistory();

    const { values, handleChange } = useForm({
        initialValues: {
            username: '',
            password: ''
        }
    });

    const { submitValues, error } = useSubmit();
    const { handleAuth } = useAuth();

    const handleSubmit = async e => {
        e.preventDefault();
        const data = await submitValues('/auth/login', values);
        if(!data) {
            return;
        } else {
            await handleAuth();
            history.push("/");
        }
    };

    return(
        <div className='page' style={{justifyContent:'center'}}>
             <div className="inlineForm">
                <h3>Login</h3>
             <div className="inlineForm__notif">
                 {error && error}
             </div>
                <form onSubmit={handleSubmit}>
                    <FormInput type={"text"} placeholder={"Username"} name={"username"} 
                                value={values.username}
                                handleChange={handleChange} />
                    <FormInput type={"password"} placeholder={"Password"} name={"password"} 
                                value={values.password}
                                handleChange={handleChange} />
                    <div className="inlineForm__submit">
                        <Link to='/register'>
                            <Prompt prompt={"No account? Create one."}/>
                        </Link>
                        <CTA name={"login"} type={"submit"} 
                            /> 
                    </div>
                </form>
            </div>
        </div>
    )
}