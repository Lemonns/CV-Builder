import React, { Component } from "react";

class PersonalInfoPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { name, email, address, number, personalLink } = this.props;
        return (
            <div className="personal-preview">
                <h1>{name}</h1>
                <div className="personal-sub-info">
                    <h3>Email: {email}</h3>
                    <h3>Address: {address}</h3>
                    <h3>Phone: {number}</h3>
                    <h3>Link: {personalLink}</h3>
                </div>
            </div>
        )
    }

}

export default PersonalInfoPreview