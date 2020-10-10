import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// const Exercise = props => (
//   <tr>
//     <td>{props.exercise.username}</td>
//     <td>{props.exercise.movie}</td>
//     <td>{props.exercise.description}</td>
//     <td>{props.exercise.duration}</td>
//     <td>{props.exercise.date.substring(0,10)}</td>
//     <td>
//       {/* passing backend_url from link */}
//       <Link to={{pathname: `/edit/${props.exercise._id}`, back_url: `${props.backend_url}`}}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
//     </td>
//   </tr>
// )

const ExerciseCard = props => (
  <div class="maincard">
    <div class="user">
      <span>{props.exercise.username} </span>
      <p>{props.exercise.date.substring(0, 10)}</p>
    </div>
    <div>
      <div style={{fontWeight:"bold"}}>movie: {props.exercise.movie}</div>
      desc: {props.exercise.description} | {props.exercise.duration} mins
      <div> <button className="btn btnme"><Link to={{pathname: `/edit/${props.exercise._id}`, back_url: `${props.backend_url}`}}>edit </Link> </button>
      <button  className="btn btnme" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</button></div>
    </div>

  </div>
)
export default class MoviesList extends Component {

  state = { exercises: [] };


  componentDidMount() {
    console.log(this.props.backend_url)
    axios.get(this.props.backend_url + '/exercises')
      .then(response => {
        //console.log(response.data)
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise = (id) => {
    axios.delete(this.props.backend_url + '/exercises/' + id)
      .then(response => { console.log(response.data) });

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList = () => {
    return this.state.exercises.map(currentexercise => {
      // return <Exercise backend_url={this.props.backend_url} exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
      return <ExerciseCard backend_url={this.props.backend_url} exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />;

    })
  }

  render() {
    return (
      <>
        <h3>My favourite Movies</h3>
        <div className="cards">
          {/* <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Movie</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table> */}
          {this.exerciseList()}
        </div>
      </>
    )
  }
}