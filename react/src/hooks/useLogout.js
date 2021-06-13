import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function useLogout() {
    let history = useHistory();

    const logoutUser = async () => {
        
        await axios.get('auth/logout').then(res => {  
                history.go(0);
            }).catch(err => console.log(err))
        }

    return {
        logoutUser
    }

}