import './styles/App.css';
import './styles/style.css'
import React, { Component } from "react";
import PersonalInfo from './components/PersonalInfo'
import JobExperience from './components/JobExperience';
import Education from './components/Education';
//States will be contained in components
//If isSubmitted is false, we will be on edit mode
//If isSubmitted is true, we will be on preview mode
//On preview mode, it will render everything without add/edit abilities
//To do this, on every component we will pass isSubmitted and render accordingly
//For instance, if isSubmitted is true, the form will not even be rendered. Just the values from the state
//We will have to use arrays and Map for jobs and education

class App extends Component {
  constructor() {
    super();
    this.state = {
      isSubmitted: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  //changes isSubmitted to true or false
  handleSubmit() {
    let bool;
    bool = this.state.isSubmitted ? false : true;
    this.setState({
      isSubmitted: bool
    })
  }
  //conditional classname
  render() {
    return (
      <div className="preview-container">
        <div className='cv-comp-container'>
          <PersonalInfo
            isPreviewing={this.state.isSubmitted}
          />
          <JobExperience
            isPreviewing={this.state.isSubmitted}
          />
          <Education
            isPreviewing={this.state.isSubmitted}
          />
        </div>
        <div className="edit-add-btn-container">
          <button className={this.state.isSubmitted ? 'edit-btn' : 'submit-btn'} onClick={this.handleSubmit}>
            {this.state.isSubmitted ? 'Edit' : 'Submit'}
          </button>
        </div>
      </div>
    )
  }
}

export default App;
