import React, { Component } from "react";
import PersonalInfoPreview from "./preview/PersonalInfoPreview";

class PersonalInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: "",
            phoneNumber: "",
            email: "",
            address: "",
            link: "",
        }

        this.updateInfo = this.updateInfo.bind(this)
    }

    updateInfo(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    

    render() {
        const { isPreviewing } = this.props;
        return (
            <div className= {isPreviewing ? "personal-info-container-preview" : "personal-info-container"}>
                {!isPreviewing && 
                <h1 className="personal-header">Personal Details</h1>
                }

                {isPreviewing ? 
                (
                <PersonalInfoPreview
                    name={this.state.fullName}
                    address={this.state.address}
                    email={this.state.email}
                    number={this.state.phoneNumber}
                    personalLink={this.state.link}
                />
                ) 
                :(
                <form>
                   <input
                     placeholder="Name"
                     onChange={this.updateInfo}
                     value={this.state.fullName}
                     name="fullName"
                   />
                   <input
                     placeholder="Phone Number"
                     onChange={this.updateInfo}
                     value={this.state.phoneNumber}
                     name="phoneNumber"
                   />
                   <input
                     placeholder="Address"
                     onChange={this.updateInfo}
                     value={this.state.address}
                     name="address"
                   />
                   <input
                     placeholder="Email"
                     onChange={this.updateInfo}
                     value={this.state.email}
                     name="email"
                   />
                   <input
                     placeholder="Link"
                     onChange={this.updateInfo}
                     value={this.state.link}
                     name="link"
                   />
                </form>
                )
                }
                
            </div>
        )
    }
}

export default PersonalInfo;
