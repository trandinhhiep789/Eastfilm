import logo from './logo.svg';
import './App.css';
import Body from './Component/Body';

import { Route, Switch } from 'react-router-dom';
import MoviesDetail from './Component/MoviesDetail';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Body}/>
        <Route exact path="/moviesdetails/:id" component={MoviesDetail}/>
      </Switch>
    </>
  );
}

export default App;
