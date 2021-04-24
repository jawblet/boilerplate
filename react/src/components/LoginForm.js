import React from 'react'; 
import { Link } from 'react-router-dom';
import FormInput from './FormInput';
import CTA from './CTA';
import Prompt from './Prompt';

const LoginForm = (props) => {

    return ( 
        <>
           
        </>
     );
}

 
export default LoginForm;

/*
 <FormInput type={"text"} placeholder={"Username"} name={"username"} 
                    value={values.username} fail={invalidFields.includes("username")}
                    handleChange={handleChange} />
            <FormInput type={"password"} placeholder={"Password"} name={"password"} 
                    value={values.password} fail={invalidFields.includes("password")}
                    handleChange={handleChange} />
            <div className="inlineForm__submit">
            <Link to='/register'>
                <Prompt prompt={"No account? Create one."}/>
            </Link>
            <CTA name={"login"} type={"submit"} 
                /> 
            </div>
*/