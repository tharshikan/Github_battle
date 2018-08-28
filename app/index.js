
/* @flow */
import React,{Component} from 'react';
import ReactDOM from "react-dom";
import Badge from './Badge.js'
import type {User} from './Badge';


class App extends Component<{name:number, user: User}>{

    render(){
        return (
            <div>
                <div>
            Hello World Fist Program {this.props.name}

            </div>
            <Badge user={this.props.user}/>
            </div>
            
        )

    }
}

let Jhon ={
    picture:'https://upload.wikimedia.org/wikipedia/en/6/63/IMG_%28business%29.svg',
    name:'Jhon Smith',
    age:36
}

ReactDOM.render(
    <App  name={5} user={Jhon}/>,
    (document.getElementById('app'):any)
  );

