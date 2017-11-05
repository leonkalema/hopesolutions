import React, { Component } from 'react';
import Job from './Job';
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Jobs extends Component {
	
	constructor() {
    super();
    this.state = {
      data: '',
      loading: true
    };
  }
  
  componentDidMount () {
    const url = 'https://jsonplaceholder.typicode.com/users';
    
    // in axios access data with .data
    axios.get(url)
      .then(response => {
        this.setState({
          data: response.data,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  render() {
	   let content;

    if (this.state.loading) {
      content = <div>Loading...</div>;
    } else { 
      content = this.state.data.map((user, index) =>
    return (
      <div>
    <h2>Jobs</h2>
    <ul>
      <li>
        <Link to={`${match.url}/phpdeveloper`}>
          PHP Developer
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/hradmin`}>
         HR Admin
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/network-engineer`}>
          Network Engineer
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:jobId`} component={Job}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a job.</h3>
    )}/>
  </div>
    );
  }
}

export default Jobs;