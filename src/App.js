import './App.css';
import { Route, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import Nav from './components/nav';
import Main from './components/main';
import Add from './pages/add';

import {useState, useEffect} from 'react'

function App() {

  // put useState
  // function Main(props) {
    const [ movies, setMovies ] = useState(null);
    const URL = "http://localhost:4000/movies";
    console.log(movies);
    
    const getMovies = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setMovies(data);
    };
    
    const createMovies = async (movie) => {
      await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(movie),
      });
      getMovies();
    };
    
    useEffect(() => getMovies(), []);

  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/movies'>
          <Main movies={movies} />
        </Route>
        <Route path='/add'>
          <Add movies={movies} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
