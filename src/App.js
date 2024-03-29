import React from 'react';
import './App.css';
// import Home from './components/Home'
import EventsListContainer from './components/EventsList/EventsListContainer'
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import CreateEventFormContainer from './components/CreateEventForm/CreateEventFormContainer';
import EventDetailsContainer from './components/EventDetails/EventDetailsContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Route path='/' exact component={EventsListContainer} />
        <Route path='/' exact component={CreateEventFormContainer} />
        <Route path='/event/:id' exact component={EventDetailsContainer} />
      </div>
    </Provider>
  );
}

export default App;
