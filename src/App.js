import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/nav';
import Main from './pages/main';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
