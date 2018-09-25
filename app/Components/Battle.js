/* @flow */

import React, { Component } from "react";
import PlayerInput from './PlayInput';
import PlayerPreview from './PlayerPreview';
import { Link } from "react-router-dom";
export default class Battle extends Component<{ match: any }, { username1: string, username2: string, userAvatar1: ?string, userAvatar2: ?string }> {

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
            newobj[`userAvatar${id}`] = `https://github.com/${username}.png?size=200`;
            return newobj;
        }

        )
    }


    render() {

        return (
            <div>
                <div className="battle-container">

                    {(!this.state.username1) ?
                        <PlayerInput
                            id={1}
                            handleSubmit={this.handleSubmit}
                        />
                        : <PlayerPreview
                            userName={this.state.username1}
                            userAvatar={this.state.userAvatar1}
                        >
                            <button
                                className="smallbutton"
                                onClick={() => {
                                    this.setState({
                                        username1: "",
                                        userAvatar1: null
                                    })
                                }}
                            >
                                onReset
        </button>
                        </PlayerPreview>
                    }

                    {(!this.state.username2) ?
                        <PlayerInput
                            id={2}
                            handleSubmit={this.handleSubmit}
                        />

                        : <PlayerPreview
                            userName={this.state.username2}
                            userAvatar={this.state.userAvatar2}
                        >
                            <button
                                className="smallbutton"

                            >
                                onReset
        </button>
                        </PlayerPreview>
                    }
                </div>

                {this.state.username1 && this.state.username2 &&
                    <Link className='button' to={{
                        pathname: this.props.match.url + "/results",
                        search: `?username1=${this.state.username1}&username2=${this.state.username2}`
                    }}>
                        Battle
                    </Link>

                }

            </div>



        )
    }
}