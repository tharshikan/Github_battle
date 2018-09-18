/* @flow */

import React, { Component } from "react";
import PlayerInput from './PlayInput';

export default class Battle extends Component<{}, { username1: string, username2: string, userAvatar1: ?string, userAvatar2: ?string }> {

    state = {
        username1: "",
        userAvatar1: null,
        username2: "",
        userAvatar2: null
    }

    handleSubmit = (event: any, id: number, username: string) => {

        console.log('HandleSubmit called');

        // event.prevemtDefault();

        this.setState(() => {
            let newobj = {};
            newobj[`username${id}`] = username;
            newobj[`userAvatar${id}`] = username;
            return newobj;
        }

        )
    }
    render() {
        return (
            <div className="battle-container">

                <PlayerInput
                    id={1}
                    handleSubmit={this.handleSubmit}
                />

                <PlayerInput
                    id={2}
                    handleSubmit={this.handleSubmit}
                />


            </div>
        )
    }
}