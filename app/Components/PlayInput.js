/* @flow */

import React, { Component } from 'react';


export default class PlayerInput extends Component<{ id: number, handleSubmit: Function }, { username: string }> {

    state = {
        username: ""
    };

    change = (e: any) => {
        this.setState({
            username: e.target.value

        })
    }

    render() {
        let playerNum: string = this.props.id == 1 ? "Player One" : "Player two"
        return (

            <form
                className="player-input"
                onSubmit={(e) => {
                    e.preventDefault();
                    this.props.handleSubmit(e, this.props.id, this.state.username)
                }
                }>
                <label className="player-label">{playerNum}</label>

                <input
                    name={`user${this.props.id}`}
                    placeholder='github username'
                    type="text"
                    value={this.state.username}
                    onChange={(e) => this.change(e)}


                />

                <button className="button">
                    Submit
                </button>
            </form>
        )
    }
}