import React, { useContext } from 'react'; 
import { Route } from 'react-router-dom';
import Loading from './../components/Loading';
import { UserContext } from './../hooks/UserContext';
import GenericLanding from './GenericLanding';

export default function PrivateRoute(props) {   
    const { user, isLoading } = useContext(UserContext); 

        const { component: Component,
        ...rest } = props; 

        console.log(user, isLoading);
        //return loading component 
        if(isLoading) {
          return <Loading/>;
        } 

        if(user){
            return ( <Route {...rest} render={(props) => (
            <Component {...props}/>)}/>)
        } else {
            return <GenericLanding/>
        }
}

















