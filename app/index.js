
/* @flow */
import React,{Component} from 'react';
import ReactDOM from "react-dom";
import Badge from './Badge.js'
import FriendsNotFriendsContainer from './FriendsNotFriendsContainer'
import type {User} from './Badge';


class App extends Component<{name:number, user: User, people:Array<{name:string, isFriend:boolean}>}>{

    render(){
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

let Jhon ={
    picture:'https://upload.wikimedia.org/wikipedia/en/6/63/IMG_%28business%29.svg',
    name:'Jhon Smith',
    age:36
}
let Aliases =[
    {name: "Tharshikan", isFriend: false},
    {name: "Jhon", isFriend: true},
    {name: "Andrew", isFriend: false},
    {name: "Mackenzie", isFriend: true},
    {name: "Harvey", isFriend: false}
]

ReactDOM.render(
    <App  name={5} user={Jhon} people={Aliases}/>,
    (document.getElementById('app'):any)
  );

