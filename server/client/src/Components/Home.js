import React, { Component } from 'react';
import '../Styles/App.css';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getJobs } from "../Actions/index";

import NavBar from './NavBar'

class Home extends Component {
    componentDidMount() {
        this.props.getJobs()
    }
    
    renderTable() {
        this.props.jobs.map(job => {
            console.log(job.title)
        })
    }

    render() {
        return (
            <div className="App">
            <NavBar />
            <h1>Go get 'em, Tiger.</h1>
            <div id='jobTable'>
                {this.renderTable()}
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

