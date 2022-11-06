import React, { Component } from "react";

class JobExperiencePreview extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const { jobName, personalTitle, jobDate, jobDescription } = this.props;
        return(
            <div className="job-card">
                <h3>{personalTitle}</h3>
                <p>{jobDate}</p>
                <p>{jobName}</p>
                <p>{jobDescription}</p>
            </div>
        )
    }
}

export default JobExperiencePreview;