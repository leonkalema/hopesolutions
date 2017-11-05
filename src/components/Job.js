import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Job extends Component {
  render({ match }) {
    return (
      <div>
    <h3>{match.params.jobId}</h3>
  </div>
    );
  }
}

export default Job;