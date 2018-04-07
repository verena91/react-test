import React, { Component } from 'react';
import { Div } from 'glamorous';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import ListContainer from './components/ListContainer';
import PostDetailContainer from './components/PostDetailContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Posts List</h1>
          </header>
          <Div
            display="flex"
            flexDirection="column"
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            padding={0}
            margin={0}
            fontSize={20}
          >
            <ErrorBoundary>
              <Route
                exact
                path="/"
                component={ListContainer}
              />
              <Route
                exact
                path="/:postId"
                component={PostDetailContainer}
              />
            </ErrorBoundary>

          </Div>

        </div >
      </Router>
    );
  }
}

export default App;
