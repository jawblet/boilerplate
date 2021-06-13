import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import FormInput from './../components/FormInput';
import CTA from './../components/CTA';
import Prompt from './../components/Prompt';
import ConfirmPasswordInput from './../components/ConfirmPasswordInput';
import useForm from './../hooks/useForm'; 
import useAuth from '../hooks/useAuth';
import useSubmit from '../hooks/useSubmit';

export default function Register() {
    let history = useHistory();

    const { values, handleChange} = useForm({
        initialValues: {
            form: 'register',
            email: '',
            username: '',
            password: '', 
            passwordConfirm: ''
        }
    });

    const { submitValues, error } = useSubmit();
    const { handleAuth } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await submitValues('/auth/register', values);
        if(!data) {
            return;
        } else {
            await handleAuth();
            history.push("/");
        }
    }

    return(
        <div className="page" style={{justifyContent:'center'}}>
            <div className="inlineForm">
            <h3>Register</h3>
                <div className="inlineForm__notif">
                    {error && error}
                </div>
                    <form onSubmit={handleSubmit}>
                        <FormInput type={"text"} placeholder={"Email"} 
                                    name={"email"} value={values.email} 
                                    handleChange={handleChange}
                                    />
                        <FormInput type={"text"} placeholder={"Username"} 
                                    name={"username"} value={values.username} 
                                    handleChange={handleChange}
                                    />
                        <ConfirmPasswordInput type={"password"} 
                                    placeholder={"Password"} placeholderConfirm={"Confirm password"}
                                    name={"password"} nameConfirm={"passwordConfirm"}
                                    value={values.password} valueConfirm={values.passwordConfirm}
                                    handleChange={handleChange}/>
                        <div className="inlineForm__submit">
                            <Link to='/login'>
                                <Prompt prompt={"Existing account? Log in."}/>
                            </Link>
                            <CTA name={"register"} type={"submit"}
                            /> 
                    </div>
                </form>
            </div>
        </div>
    )
}