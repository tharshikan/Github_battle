
/* @flow */
import React,{Component} from 'react';
import ReactDOM from "react-dom";




declare type User= {
    picture: string,
    name: string,
    age: number
};

type BadgeProps={
    user: User
}

class Badge extends Component<{user:{
    picture: string,
    name: string,
    age: number
}}>{

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




class App extends Component<{name:number, user: User;}>{

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
    age:32
}

ReactDOM.render(
    <App  name={5} user={Jhon}/>,
    (document.getElementById('app'):any)
  );

