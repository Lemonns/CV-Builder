import React, { Component } from "react";
import uniqid from "uniqid";
import EducationPreview from "./preview/EducationPreview";

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            educations: [{
                    schoolName: "",
                    degree: "",
                    date: "",
                    desc: "",
                    id: uniqid(),
                }],
        }
        this.onAddEducation = this.onAddEducation.bind(this);
    }
    onAddEducation() {
        this.setState({
            educations: this.state.educations.concat({
                schoolName: "",
                degree: "",
                date: "",
                desc: "",
                id: uniqid(),
            })
        })
    }

    handleEducationChange(eduId) {
        const educationToEdit = this.state.educations.filter(education => education.id === eduId);
        return educationToEdit[0];
    }

    handleInputChange(e, eduId) {
        let objectToEdit = this.handleEducationChange(eduId);
        objectToEdit[e.target.name] = e.target.value;
        this.handleObjectEduChange(eduId, objectToEdit);
    }

    handleObjectEduChange(eduId, updatedObj) {
        const updatedInfo = this.state.educations.map((education) => {
            return education.id === eduId ? updatedObj : education;
        })
        this.setState({
            educations: updatedInfo,
        })
    }

    handleEduDeletion(eduId) {
        const newEducationArray = this.state.educations.filter(education => education.id !== eduId);
        this.setState({
            educations: newEducationArray,
        })
    }

    render() {
        const { educations } = this.state;
        const { isPreviewing } = this.props;

        return (
            <div className="education-container">
                {!isPreviewing && <h1 className="education-header">Education</h1>}
                {isPreviewing && <h1 className="education-preview-header">Education</h1>}

                {isPreviewing ? 
                (
                    educations.map((edu) => (
                        <EducationPreview
                        eduDegree={edu.degree}
                        eduSchoolName={edu.schoolName}
                        eduDate={edu.date}
                        eduDesc={edu.desc}
                      />
                    ))
                ) 
                : 
                (
                    educations.map((edu) => (
                        <div className="edu-form-container" key={edu.id}>
                            <form key={edu.id}>
                                <input
                                  placeholder="School/University"
                                  name="schoolName"
                                  onChange={e => this.handleInputChange(e, edu.id)}
                                  value={edu.schoolName}
                                />
                                <input
                                  placeholder="Degree"
                                  name="degree"
                                  onChange={e => this.handleInputChange(e, edu.id)}
                                  value={edu.degree}
                                />
                                <input
                                  placeholder="Date (Ex: 2017 - 2021)"
                                  name="date"
                                  onChange={e => this.handleInputChange(e, edu.id)}
                                  value={edu.date}
                                />
                                <textarea
                                    placeholder="Achievements/description"
                                    name="desc"
                                    onChange={e => this.handleInputChange(e, edu.id)}
                                    value={edu.desc}
                                />
                            </form>
                            
                            <button onClick={() => this.handleEduDeletion(edu.id)} className="edu-delete">Delete</button>
                        </div>
                    ))
                )}
                {!isPreviewing && <button className="edu-add" onClick={this.onAddEducation}>Add Education</button>}
            </div>
        )
    }
}

export default Education;