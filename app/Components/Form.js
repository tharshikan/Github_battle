/* @flow */
import React, { Component } from "react";

export default class Form extends Component<{}, { userName: string, password: string, email: string }> {

    state = {
        userName: "stateUsername",
        password: "",
        email: "",

    };

    Change = (e: any) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="form-container">
                <form >
                    <label >UserNaAME </label>
                    <input
                        name="userName"
                        type="text"
                        placeholder="UserName"
                        value={this.state.userName}
                        onChange={e => this.Change(e)}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={e => this.Change(e)}
                    />

                    <input
                        name="email"
                        type="text"
                        placeholder="...@.com"
                        value={this.state.email}
                        onChange={(e) => (this.setState({ email: e.target.value }))}
                    />
                </form>

            </div>
        )
    }

}