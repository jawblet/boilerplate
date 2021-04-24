import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from './../hooks/UserContext';
import Loading from './../components/Loading'; 


export default function PrivateRoute(props) {   
    const { user, isLoading } = useContext(UserContext); 

    const Component = props.component; 

    console.log(`${user} is the user`)

      if(isLoading) {
          return <Loading/>
        }

    //USER HAS TO BE CHECKED HERE
      if(user){
          return <Component/>
        } else {
            return <Redirect to={{pathname: '/'}} /> 
        };
}



















/**
  

    useEffect(() => {
        console.log('The Privte Route useEffect ran');
        if(user) {
          console.log(user);
          setUser(userStatus.username);
        } else {
            console.log('The Privte Route did NOT find a user');
            setUser({});
        }
      }, []);
 

 export default function PrivateRoute(props) {
    const { user, setUser } = useContext(UserContext);
    const { userStatus } = useFindUser();

    const checkAuthentication = () => {
            console.log('Private route check ran');
            const Component = props.component; 
            if(user) {
                return <Component/>
            } else {
                return <Redirect to = {{ pathname: '/' }} />
            }
        }
 
    return(
        <>
        {checkAuthentication(props)}
       </>
    )
};
**/
