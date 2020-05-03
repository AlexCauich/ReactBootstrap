import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import resources
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Profile from './components/Profile';

class App extends Component {
    render() {
        return(
            <Router>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                    <div className="container">
                        <Route exact path="/login" component={Login} />
                    </div>
                    <Route exact path="/profile" component={Profile} />
                </div>
            </Router>
        )
    }
}
export default App;