import { useState } from "react";
import { useHistory } from "react-router-dom";


function Add({ movies }) {
  const [newForm, setNewForm] = useState({
    title: "",
    // image: "",
  });

  const history = useHistory();

  const handleChange = (event) => {
    event.preventDefault();
    // dangerous way
    // setNewForm({ ...newForm, [event.target.name]: event.target.value });
    // safe way
    setNewForm((oldForm) => ({
      ...oldForm,
      [event.target.name]: event.target.value,
    }));
  };

  function handleSubmit(event) {
    
    event.preventDefault();
    const newMovie = {...newForm}
    fetch("https://shows-backjps.herokuapp.com/movies", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(newMovie),
    })

    setNewForm({
      title: "",
    });
    history.push("/movies");
    window.location.reload(false);
  };

  
  
  return (
    <section id="allMovies">
      <form className="container" onSubmit={handleSubmit}>
        <input
          id="input"
          type="text"
          value={newForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        {/* <input 
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image"
          onChange={handleChange}
           /> */}
         <input className="btn-floating btn-medium center green material-icons " type="submit" value="add" onSubmit={handleSubmit} />
      </form>
    </section>
  );
}


export default Add;
