import React, { Component } from 'react';
import '../Styles/Home.css';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getJobs } from "../Actions/index";

import NavBar from './NavBar'

class Home extends Component {
    componentDidMount() {
        this.props.getJobs()
    }
    
    renderTable() {
        return this.props.jobs.map((job) => {
            return (
                <tr key={job._id}>
                    <td>{job.company}</td>
                    <td>{job.title}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="App">
                <NavBar />
                <h1>Go get 'em, Tiger.</h1>
                <div id='jobTable'>
                    <table>
                        <thead>
                            <tr>
                                <th>Company</th>
                                <th>Job Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { jobs: state.jobs };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getJobs }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

