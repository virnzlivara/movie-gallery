import React, { useEffect } from 'react'; 
import './App.css';

import Movies from './features/movie/Movies';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'; 
import Details from './features/details/Details';
const App = () =>{ 
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Movies} />
            <Route path='/details/:id' component={Details}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
