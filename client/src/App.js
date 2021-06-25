
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

const App = () => {
    return (
        <Router >
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/profile/:username">
                    <Profile />
                </Route>
            </Switch>
        </Router>    
    )
}

export default App
