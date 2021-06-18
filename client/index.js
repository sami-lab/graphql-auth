import React from 'react';
import ReactDOM from 'react-dom';

import ApolloClient, { createNetworkInterface } from 'apollo-client';
import App from './components/App';
import LoginForm from './components/loginForm';
import SignUpForm from './components/signUpForm';
import Dashboard from './components/dashboard';
import requireAuth from './components/requireAuth';

import { ApolloProvider } from 'react-apollo';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin', //it should sent along cookies whenever makes a query to a backend server
  },
});

const client = new ApolloClient({
  networkInterface, //network interfface use for this application and not appollo default one
  dataIdFromObject: (o) => o.id,
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="login" component={LoginForm} />
          <Route path="signup" component={SignUpForm} />
          <Route path="dashboard" component={requireAuth(Dashboard)} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
