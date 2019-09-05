import React from 'react';
import './App.css';
// import Home from './components/Home'
import EventsListContainer from './components/EventsList/EventsListContainer'
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Route path='/' exact component={EventsListContainer} />
      </div>
    </Provider>
  );
}

export default App;
