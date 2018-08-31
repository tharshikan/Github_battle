import React, {Component} from "react";
import type {User} from "./Badge";
import Badge from "./Badge";
import FriendsNotFriendsContainer from "./FriendsNotFriendsContainer";
import * as PropTypes from "prop-types";

function HelloW(props: { name:number }) {
    return <div>
        Hello World Fist Prograam {props.name}
    </div>;
}

export class App extends Component<{ name: number, user: User, people: Array<{ name: string, isFriend: boolean }> }> {

    render() {
        return (
            <div>
                <HelloW name={this.props.name}/>
                <Badge user={this.props.user}/>
                <FriendsNotFriendsContainer users={this.props.people}/>
            </div>

        )

    }
}