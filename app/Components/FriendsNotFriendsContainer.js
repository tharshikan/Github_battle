/* @flow */
import React, { Component } from 'react';

class FriendsNotFriendsContainer extends Component<{ users: Array<{ name: string, isFriend: boolean }> },
    { currentFriendSelcted: string }>{

    constructor(props: { users: Array<{ name: string, isFriend: boolean }> }) {
        super(props);
        this.state = { currentFriendSelcted: "Tharshikan" };
        console.log('constructor', this);
    }
    // state = { currentFriendSelcted: "Tharshikan" };

    setCurrentFriendSelcted = (x: string) => {
        console.log('currenFriendSelecte () =>', this);

        this.setState({ currentFriendSelcted: x });

    }

    setCurrentFriendSelectedStandard(x: string) {


        console.log('NormalcurrentFriendSelected', this);
        this.setState({ currentFriendSelcted: x });
    }



    render() {
        console.log('render', this);

        let friends = this.props.users.filter(x => x.isFriend == true);
        let notFriends = this.props.users.filter(x => x.isFriend == false);
        return (
            <div className={"listContainer"}>
                <h1>Friends vs NotFriends</h1>
                <h2>Friends</h2>
                <ul className={"group friends"}>
                    {friends.map(x => (
                        <li
                            style={this.state.currentFriendSelcted === x.name ? { color: 'red' } : null}
                            key={x.name}
                            onClick={() => { this.setCurrentFriendSelcted(x.name) }}
                        >
                            {x.name}
                        </li>
                    ))}
                </ul>
                <h2>Not Friends</h2>
                <ul className={"group nonFriends"}>
                    {notFriends.map(x => (
                        <li
                            style={this.state.currentFriendSelcted === x.name ? { color: 'red' } : null}
                            key={x.name}
                            onClick={() => { this.setCurrentFriendSelectedStandard(x.name) }}
                        >
                            {x.name}
                        </li>
                    ))}
                </ul>
            </div>)
    }
}

export default FriendsNotFriendsContainer;