import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo';

import routes from './Routes'
import { Navbar } from './common/Navbar';
import './App.scss';
import client from './Graphql';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Router>
            <React.Fragment>
              <Navbar/>
              {routes}
            </React.Fragment>
          </Router>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
