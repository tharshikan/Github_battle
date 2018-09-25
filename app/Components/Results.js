/* @flow */

import React, { Component } from "react";
import PlayerPreview from './PlayerPreview';
import queryString from "query-string";
import { getUserData, getProfile, Battle } from '../utils/api'
import Loading from "./Loading";

export default class Result extends Component<{ location: any }, { player1: ?any, player2: ?any }>{

    state = {
        player1: null,
        player2: null
    }



    componentDidMount() {

        let query = queryString.parse(this.props.location.search);
        console.log(query);
        //getUserData(query.username1).then(data => console.log(data))
        //console.log('...........');

        Battle([query.username1, query.username2])
            .then((players) => {

                console.log(players);
                console.log(players[0]);

                this.setState(
                    {

                        player1: players[0],
                        player2: players[1]

                    }

                )

            })

    }

    render() {
        const newLocal = this.state.player1
        return (
            <div>

                {(this.state.player1 && this.state.player2) ?
                    <div className="column">
                        <PlayerPreview
                            userName={this.state.player1.profile.name}
                            userAvatar={this.state.player1.profile.avatar_url}
                        >
                        </PlayerPreview>

                        <PlayerPreview
                            userName={this.state.player2.profile.name}
                            userAvatar={this.state.player2.profile.avatar_url}
                        >

                        </PlayerPreview>
                    </div>

                    :
                    <Loading />
                }






            </div>
        )
    }


}