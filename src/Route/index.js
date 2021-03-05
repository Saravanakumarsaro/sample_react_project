import React, { Component } from "react";
import {BrowserRouter as Router , Switch , Route , Link} from "react-router-dom"
import Home from "../Pages/Home.js";

class RoutePage extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}
export default RoutePage