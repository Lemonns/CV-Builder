import React, { Component } from "react";
import uniqid from "uniqid";
import JobExperiencePreview from "./preview/JobExperiencePreview";

class JobExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [{
                companyName: "",
                title: "",
                date: "",
                description: "",
                id: uniqid(),
            }],
        };
        this.handleJobChange = this.handleJobChange.bind(this);
    }
   
    onAddJob(e) {
        this.setState({
            jobs: this.state.jobs.concat({
                companyName: "",
                title: "",
                date: "",
                description: "",
                id: uniqid(),
            })
        })
    }


    handleJobChange(jobId) {
        const jobToEdit = this.state.jobs.filter(job => job.id === jobId);
        return jobToEdit[0];
    }

    handleCompanyNameChange(e, jobId) {
        let objectToEdit = this.handleJobChange(jobId);
        objectToEdit[e.target.name] = e.target.value;
        this.handleObjectChange(jobId, objectToEdit);
    }

    handleObjectChange(jobId, updatedObject) {
        const updatedInfo = this.state.jobs.map((job) => {
            return job.id === jobId ? updatedObject : job; 
        })
        //console.log(updatedInfo)
        this.setState({
            jobs: updatedInfo,
        })
    }

    handleJobDeletion(jobId) {
        const newJobsArray = this.state.jobs.filter(job => job.id !== jobId);
        this.setState({
            jobs: newJobsArray,
        })
    }

    //Map the objects in jobs array
    //Every time a job gets added it creates a new form
    render() {
        const { jobs } = this.state;
        const { isPreviewing } = this.props;

        return (
            //jobName, personalTitle, jobDate, jobDescription
            <div className="job-container">
                {!isPreviewing && <h1 className="job-header">Job Experience</h1>}
                {isPreviewing && <h1 className="job-preview-header">Job Experience</h1>}
                {isPreviewing ? 
                (
                    jobs.map((job) => (
                        <JobExperiencePreview
                          jobName={job.companyName}
                          personalTitle={job.title}
                          jobDate={job.date}
                          jobDescription={job.description}
                        />
                    ))
                ) 
                : 
                (jobs.map((job) => (
                    <div className="job-form-container" key={job.id}>
                        <form key={job.id}>
                          <input
                            placeholder="Company Name"
                            name="companyName"
                            onChange={e => this.handleCompanyNameChange(e, job.id)}
                            value={job.companyName}
                          />
                          <input
                            placeholder="Job Title"
                            name="title"
                            onChange={e => this.handleCompanyNameChange(e, job.id)}
                            value={job.title}
                          />
                          <input
                            placeholder="Date"
                            name="date"
                            onChange={e => this.handleCompanyNameChange(e, job.id)}
                            value={job.date}
                          />
                          <textarea
                            className="desc-box"
                            placeholder="Job Description"
                            name="description"
                            onChange={e => this.handleCompanyNameChange(e, job.id)}
                            value={job.description}
                          />
                        </form>
                        <button className="job-delete" onClick={() => this.handleJobDeletion(job.id)}>Delete</button>
                    </div>)))}
                    {isPreviewing === false && <button className="job-add" onClick={this.onAddJob.bind(this)}>Add Job</button>}
            </div>
        );
    }
}

export default JobExperience;