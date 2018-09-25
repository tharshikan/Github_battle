/* @flow */
import * as React from 'react';

export default function PlayerPreview(props: { userName: string, userAvatar: ?string, children?: React.Node }) {
    return (
        <div className="home-container">
            <img
                className="avatar"
                src={props.userAvatar}
                alt={`Avatar for ${props.userName}`}
            />

            <div>
                <h1>{props.userName}</h1>
            </div>
            <div>

                {props.children}
            </div>


        </div>
    )
}






