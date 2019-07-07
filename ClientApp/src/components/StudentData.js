import React, { Component } from 'react'

export class StudentData extends Component {
    displayName = StudentData.namme

    constructor(props) {
        super(props)
        this.state = { studentData: [], loading: true };

        fetch('api/Student/GetStudents')
            .then(response => response.json())
            .then(data => {
                this.setState({ studentData: data, loading: false });
            });


    }

    render() {
        
        return (
            <div>
                <h1> Hello There </h1>
            </div>
        );
    }
}