
/* @flow */
import React,{Component} from 'react';
import ReactDOM from "react-dom";

class App extends Component<{name?:string}>{

    render(){
        return (
            <div>
            Hello World
            </div>
        )

    }
}

ReactDOM.render(
    <App />,
    (document.getElementById('app'):any)
  );

