
/* @flow */
import React,{Component} from 'react';
import ReactDOM from "react-dom";

class App extends Component<{name:number}>{

    render(){
        return (
            <div>
            Hello World {this.props.name}
            </div>
        )

    }
}

ReactDOM.render(
    <App  name={5}/>,
    (document.getElementById('app'):any)
  );

