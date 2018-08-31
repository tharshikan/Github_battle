/* @flow */
import React, { Component } from 'react';

class FriendsNotFriendsContainer extends Component<{ users: Array<{ name: string, isFriend: boolean }> }>{
    render() {
        let friends = this.props.users.filter(x => x.isFriend == true);
        let notFriends = this.props.users.filter(x => x.isFriend == false);
        return (
            <div>
                <h1>Friends vs NotFriends</h1>
                <h2>Friends</h2>
                <ul>
                    {friends.map(x => (<li>{x.name}</li>))}
                </ul>
                <h2>Not Friends</h2>
                <ul>
                    {notFriends.map(x => (<li>{x.name}</li>))}
                </ul>
            </div>)


    }
}

export default FriendsNotFriendsContainer;