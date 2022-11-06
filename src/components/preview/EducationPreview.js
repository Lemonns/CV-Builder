import React, { Component } from "react";

class EducationPreview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { eduDegree, eduSchoolName, eduDate, eduDesc} = this.props;
        return (
            <div className="education-card">
                <h3>{eduSchoolName}</h3>
                <h4>{eduDegree}</h4>
                <p>{eduDate}</p>
                <p>{eduDesc}</p>
            </div>
        )
    }
}

export default EducationPreview;