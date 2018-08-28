/* @flow */
import React,{Component} from 'react';
import ReactDom from 'react-dom';
import { throws } from 'assert';

declare type User= {
    picture: string,
    name: string,
    age: number
};

type BadgeProps={
    user: User
}

class Badge extends Component<BadgeProps>{

    render(){
        return(
            <div>
                <img src={this.props.user.picture} alt="Profile Picture" />
                <h1>{this.props.user.name}</h1>
                <h3>{this.props.user.age}</h3>
            </div>
            
        )
    }

}



export default Badge;
