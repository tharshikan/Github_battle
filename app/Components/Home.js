/* @flow */


import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component<{}> {
    render() {
        return (
            <div className="home-container">
                <h1>Github Batte: battle your friends ... and stuff.</h1>

                <Link to="/battle" className='button'>battle!</Link>


            </div>
        )
    }
}