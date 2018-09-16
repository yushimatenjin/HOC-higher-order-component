import React, { Component } from 'react';
import './App.css';
import ppHOC from './pp'


class App extends Component {
    render() {
        const {value,onChange} = this.props.name
        console.log(this.props)

        return (
            <div className="App">

                <input type="text" onChange={(event) => onChange(event)} />
            </div>
        );
    }
}

export default ppHOC(App);
