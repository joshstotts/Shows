import './App.css';
import { Route, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import Nav from './components/nav';
import Main from './pages/main';
import Add from './pages/add';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/add'>
          <Add />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
