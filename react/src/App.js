import { useMemo } from 'react'; 
import './App.css'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { UserContext } from './hooks/UserContext';
import Register from './pages/Register';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import useFindUser from './hooks/useFindUser';
import PrivateRoute from './pages/PrivateRoute';
import PrivateRouter from './utils/PrivateRouter';
 
function App() { 
  const { user, setUser, isLoading } = useFindUser();
  const providerValue = useMemo(() => ({ user, setUser, isLoading }), [user, setUser, isLoading]);
  
  return (
   <Router>
       <UserContext.Provider value={providerValue}>
       <Switch>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/" component={PrivateRouter}/>
          <Route component={NotFound}/>
        </Switch>
      </UserContext.Provider>
   </Router>
  );
}

export default App;
