import React, {Component} from "react";
import type {User} from "./Badge";
import Badge from "./Badge";
import FriendsNotFriendsContainer from "./FriendsNotFriendsContainer";

export class App extends Component<{ name: number, user: User, people: Array<{ name: string, isFriend: boolean }> }> {

    render() {
        return (
            <div>
                <div>
                    Hello World Fist Program {this.props.name}
                </div>
                <Badge user={this.props.user}/>
                <FriendsNotFriendsContainer users={this.props.people}/>
            </div>

        )

    }
}