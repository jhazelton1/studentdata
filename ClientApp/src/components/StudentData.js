import React, { Component } from 'react'
import StudentInfo from './StudentInfo'
import { Col, Grid, Row } from 'react-bootstrap';
import Chart from 'chart.js';
import { LineChart } from './LineChart'


export class StudentData extends Component {
    displayName = StudentData.namme

    constructor(props) {
        super(props)
        this.state = { studentData: [], loading: true };

        fetch('api/Student/GetStudents')
            .then(response => response.json())
            .then(data => {
                this.setState(
                    { studentData: data, loading: false });
            });



    }

    componentDidMount() {
        
        {/* 
                 var ctx = document.getElementById('chart').getContext('2d');
        new Chart(ctx, {
            type: 'line',

            data: {
                labels: ['1', '2', '3', '4'],
                datasets: [{
                    label: 'Travel Time Compared With Final Grade',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            },
            options: {}
        })
         
         */}

    }




    getInternetStatistics() {

        let hasInternetStudentCount = this.state.studentData.filter(i => i.isInternet).length
        let hasInternet = this.state.studentData.filter(i => i.isInternet).reduce((acc, c) => acc += c.gThree, 0)
        let hasInternetAverage = hasInternet / hasInternetStudentCount

        let hasNoInternetStudentCount = this.state.studentData.filter(i => !i.isInternet).length
        let hasNoInternet = this.state.studentData.filter(i => !i.isInternet).reduce((acc, c) => acc += c.gThree, 0)
        let hasNoInternetAverage = hasNoInternet / hasNoInternetStudentCount

        let internetStatisticsArray = [Math.floor(hasInternetAverage * 100) / 100, Math.floor(hasNoInternetAverage * 100) / 100]
        return internetStatisticsArray
    }

    getStudyTimeStatistics() {
        let studyOne = this.state.studentData.filter(i => i.studyTime === 1).reduce((acc, c) => acc += c.gThree, 0)
            / this.state.studentData.filter(i => i.studyTime === 1).length;

        let studyTwo = this.state.studentData.filter(i => i.studyTime === 2).reduce((acc, c) => acc += c.gThree, 0)
            / this.state.studentData.filter(i => i.studyTime === 2).length;

        let studyThree = this.state.studentData.filter(i => i.studyTime === 3).reduce((acc, c) => acc += c.gThree, 0)
            / this.state.studentData.filter(i => i.studyTime === 3).length;

        let studyFour = this.state.studentData.filter(i => i.studyTime === 4).reduce((acc, c) => acc += c.gThree, 0)
            / this.state.studentData.filter(i => i.studyTime === 4).length;

        return [studyOne, studyTwo, studyThree, studyFour].map(i => Math.floor(i * 100) / 100)

    }

    getAbsencesStatistics() {
        let absenceOne = this.state.studentData.filter(i => i.absences < 10).reduce((acc, c) => acc += c.gThree, 0)
            / this.state.studentData.filter(i => i.absences < 10).length;

        let absenceTwo = this.state.studentData.filter(i => i.absences >= 10 && i.absences < 30).reduce((acc, c) => acc += c.gThree, 0)
            / this.state.studentData.filter(i => i.absences >= 10 && i.absences < 30).length;

        let absenceThree = this.state.studentData.filter(i => i.absences >= 30 && i.absences < 50).reduce((acc, c) => acc += c.gThree, 0)
            / this.state.studentData.filter(i => i.absences >= 30 && i.absences < 50).length;

        let absenceFour = this.state.studentData.filter(i => i.absences >= 50).reduce((acc, c) => acc += c.gThree, 0)
            / this.state.studentData.filter(i => i.absences >= 50).length;

        return [absenceOne, absenceTwo, absenceThree, absenceFour].map(i => Math.floor(i * 100) / 100)

    }

    getPastFailuresStatistics() {
        let failureOne = this.state.studentData.filter(i => i.failures === 0).reduce((acc, c) => acc += c.gThree, 0)
            / this.state.studentData.filter(i => i.failures === 0).length;

        let failureTwo = this.state.studentData.filter(i => i.failures === 1).reduce((acc, c) => acc += c.gThree, 0)
            / this.state.studentData.filter(i => i.failures === 1).length;

        let failureThree = this.state.studentData.filter(i => i.failures === 2).reduce((acc, c) => acc += c.gThree, 0)
            / this.state.studentData.filter(i => i.failures === 2).length;

        let failureFour = this.state.studentData.filter(i => i.failures >= 3).reduce((acc, c) => acc += c.gThree, 0)
            / this.state.studentData.filter(i => i.failures >= 3).length;

        return [failureOne, failureTwo, failureThree, failureFour].map(i => Math.floor(i * 100) / 100)
    }

    getTravelTimeStatistics() {
        let travelOne = this.state.studentData.filter(i => i.travelTime === 1).reduce((acc, c) => acc += c.gThree, 0)
            / this.state.studentData.filter(i => i.travelTime === 1).length;
        let travelTwo = this.state.studentData.filter(i => i.travelTime === 2).reduce((acc, c) => acc += c.gThree, 0)
            / this.state.studentData.filter(i => i.travelTime === 2).length;
        let travelThree = this.state.studentData.filter(i => i.travelTime === 3).reduce((acc, c) => acc += c.gThree, 0)
            / this.state.studentData.filter(i => i.travelTime === 3).length;
        let travelFour = this.state.studentData.filter(i => i.travelTime === 4).reduce((acc, c) => acc += c.gThree, 0)
            / this.state.studentData.filter(i => i.travelTime === 4).length;

        return [travelOne, travelTwo, travelThree, travelFour].map(i => Math.floor(i * 100) / 100)
    }

    getHealthStatistics() {
        let healthOne = this.state.studentData.filter(i => i.health === 1).reduce((acc, c) => acc += c.gThree, 0)
            / this.state.studentData.filter(i => i.health === 1).length;
        let healthTwo = this.state.studentData.filter(i => i.health === 2).reduce((acc, c) => acc += c.gThree, 0)
            / this.state.studentData.filter(i => i.health === 2).length;
        let healthThree = this.state.studentData.filter(i => i.health === 3).reduce((acc, c) => acc += c.gThree, 0)
            / this.state.studentData.filter(i => i.health === 3).length;
        let healthFour = this.state.studentData.filter(i => i.health === 4).reduce((acc, c) => acc += c.gThree, 0)
            / this.state.studentData.filter(i => i.health === 4).length;
        let healthFive = this.state.studentData.filter(i => i.health === 5).reduce((acc, c) => acc += c.gThree, 0)
            / this.state.studentData.filter(i => i.health === 5).length;

        return [healthOne, healthTwo, healthThree, healthFour, healthFive].map(i => Math.floor(i * 100) / 100)
    }

    render() {

        let internetStatistics = this.getInternetStatistics();
        let studyStatistics = this.getStudyTimeStatistics();
        let absenceStatistics = this.getAbsencesStatistics();
        let failureStatistics = this.getPastFailuresStatistics();
        
        let ctxOne = document.getElementById('chartOne') ? document.getElementById('chartOne').getContext('2d') : ""
        let ctxTwo = document.getElementById('chartTwo') ? document.getElementById('chartTwo').getContext('2d') : ""
        let chartOne = new Chart(ctxOne, {
            type: 'line',
            data: {
                labels: ['1', '2', '3', '4'],
                datasets: [{
                    label: 'Travel Time Compared With Final Grade',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: this.getTravelTimeStatistics()
                }]
            }
        })
        let chartTwo = new Chart(ctxTwo, {
            type: 'line',
            data: {
                labels: ['1', '2', '3', '4', '5'],
                datasets: [{
                    label: 'Health Compared With Final Grade',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: this.getHealthStatistics()
                }]
            }
        })

        return (
            <div >
                <h1 style={{ fontWeight: "1000" }}> Student Statistics of Final Grade </h1>
                <Row>
                    <Col sm={6}>
                        <StudentInfo
                            title={"Internet"}
                            valueOne={"With Internet: " + internetStatistics[0]}
                            valueTwo={"Without Internet: " + internetStatistics[1]}
                        />
                    </Col>
                    <Col sm={6}>
                        <StudentInfo
                            title={"Past Failures"}
                            valueOne={"Zero: " + failureStatistics[0]}
                            valueTwo={"One: " + failureStatistics[1]}
                            valueThree={"Two: " + failureStatistics[2]}
                            valueFour={"Three or greater: " + failureStatistics[3]}
                        />
                    </ Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <StudentInfo
                            title={"Study Time"}
                            valueOne={"Less than 2 hours: " + studyStatistics[0]}
                            valueTwo={"2 to 5 Hours: " + studyStatistics[1]}
                            valueThree={"5 to 10 Hours: " + studyStatistics[2]}
                            valueFour={"Greater than 10 Hours: " + studyStatistics[3]}
                        />
                    </ Col>
                    <Col sm={6}>
                        <StudentInfo
                            title={"Absences"}
                            valueOne={"Less than 10: " + absenceStatistics[0]}
                            valueTwo={"Less than 30: " + absenceStatistics[1]}
                            valueThree={"Less than 50: " + absenceStatistics[2]}
                            valueFour={"Greater than 50: " + absenceStatistics[3]}
                        />
                    </ Col>
                </Row>
                <hr />
                <Row>
                    <Col sm={5}>
                        <canvas id={'chartOne'} />
                    </Col>
                    <Col sm={1} />
                    <Col sm={5}>
                        <canvas id={'chartTwo'} />
                    </Col>
                </Row>
            </div>

        );
    }
}