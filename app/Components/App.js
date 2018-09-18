/* @flow */
import React, { Component } from "react";
import type { User } from "./Badge";
import Badge from "./Badge";
import FriendsNotFriendsContainer from "./FriendsNotFriendsContainer";
import * as PropTypes from "prop-types";
import '../index.css'
import { Popular } from "./Popular";
import Nav from "./Nav";
import { Home } from "./Home";
import Battle from "./Battle";
import Form from "./Form";
import { BrowserRouter, Route } from 'react-router-dom';
const Router = BrowserRouter;



function HelloW(props: { name: number }) {
    return <div>
        Hello World Fist Prograam {props.name}
    </div>;
}

export class App extends Component<{ name: number, user: User, people: Array<{ name: string, isFriend: boolean }> }> {

    render() {
        return (
            <div className={"container"}>

                <HelloW name={this.props.name} />
                <Badge user={this.props.user} />
                <FriendsNotFriendsContainer users={this.props.people} />



                <Router>
                    <div>
                        <Nav />
                        <Route exact path='/' component={Home} />
                        <Route exact path='/popular' component={Popular} />
                        <Route path='/battle' component={Battle} />
                        <Route path='/form' component={Form} />
                    </div>

                </Router>


            </div>

        )

    }
}

