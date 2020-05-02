import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import resources
import Landing from './components/Landing';
import Navbar from './components/Navbar';

class App extends Component {
    render() {
        return(
            <Router>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                    <div className="container">
                    </div>
                </div>
            </Router>
        )
    }
}
export default App;