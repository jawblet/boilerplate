import { useMemo, useEffect } from 'react'; 
import './App.css'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { UserContext } from './hooks/UserContext';
import Register from './pages/Register';
import Login from './pages/Login';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
import useFindUser from './hooks/useFindUser';
import PrivateRoute from './pages/PrivateRoute';
import Profile from './pages/Profile';

function App() { 
  const { findUser, user, setUser, isLoading } = useFindUser();

  useEffect(() => {
    async function onPageLoad() {
      await findUser();
    }
    onPageLoad(); 
  }, []);

  const providerValue = useMemo(() => ({ user, setUser, isLoading }), [user, setUser, isLoading]);
  
  return (
   <Router>
       <UserContext.Provider value={providerValue}>
       <Switch>
          <PrivateRoute exact path="/" component={Landing}/>  
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/me" component={Profile}/>
          <Route component={NotFound}/>
        </Switch>
      </UserContext.Provider>
   </Router>
  );
}

export default App;
