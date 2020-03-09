import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

import Host from "./components/Host";
import Join from "./components/Join";

import SocketContext from './context/socket-context';
import io from "socket.io-client";


let socket = io(`http://localhost:3001/`);

class App extends Component {

  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:3001",
      socket: false
    };
  }

  componentDidMount() {
    // const { endpoint } = this.state;
    // const socket = socketIOClient(endpoint);
    // socket.on("FromAPI", data => this.setState({ response: data }));
    
  }






  render() {

    const { response } = this.state;

    return (

      <SocketContext.Provider value={socket}>
     
        <Router>
          <div>

            <button onClick={this.sendMSG}>test</button>

            <ul>
              <li>
                <Link to="/">Host Synth</Link>
              </li>
              <li>
                <Link to="/join">Join Synth</Link>
              </li>
            </ul>

            <hr />



            <Switch>
              <Route exact path="/">
                <Host />
              </Route>
              <Route path="/join">
                <Join />
              </Route>
            </Switch>
          </div>
        </Router>
    
      </SocketContext.Provider>

    );
  }
}

export default App;