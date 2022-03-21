import React from "react";
import "../App.css";



function Main({ movies }) {
  
  const loaded = () => {
    return movies?.map((movie) => (
      <div id="line" className="row">
        <div className="col s1 m7">
        <a id="link" className="center" href="https://www.imdb.com/" target="_blank">
          <div id="cardSize" className="card small">
            <div id="detail" className="card-content center">
              <h2 className="movie" key={movie._id}> {movie.title}</h2>
              
            </div>
          </div>
          </a>
        </div>
      </div>
    ));
  };
  

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section id="allMovies">
      
      {console.log(movies)}
      {movies ? loaded() : loading()}
    </section>
  );
}

  
  
export default Main;
