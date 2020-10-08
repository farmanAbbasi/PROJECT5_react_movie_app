import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import MoviesList from "./components/movies-list.component";
import EditMovies from "./components/edit-movies.component";
import CreateMovies from "./components/create-movies.component";
import CreateUser from "./components/create-user.component";
import"./App.css"

function App() {
  return (
    <Router>
      <div >
      <Navbar />
      <br/>
      <div className="container">
      <Route path="/" exact component={MoviesList} />
      <Route path="/edit/:id" component={EditMovies} />
      <Route path="/create" component={CreateMovies} />
      <Route path="/user" component={CreateUser} />
      </div>
     
      </div>
    </Router>
  );
}

export default App;
