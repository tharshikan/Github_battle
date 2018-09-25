/* @flow */
import React, { Component } from "react";


let styles = {
    content: {
        fontSize: '2em',
        textAlign: "center"
    }
};




export default class Loading extends Component<{}, { text: string }>{


    state = {
        text: "Loading"
    }

    componentDidMount() {
        console.log('componentDidMount', this);


        this.interval = window.setInterval(() => {
            console.log('setInterval', this);
            switch (this.state.text) {
                case ('Loading'):
                case ('Loading.'):
                case ('Loading..'):

                    this.setState({ text: this.state.text + "." })
                    break;

                default:
                    this.setState({ text: "Loading" })
                    break;
            }


            console.log(this.state.text);

        }, 250)
    }

    componentWillUnmount() {

        window.clearInterval(this.interval);
    }

    render() {
        return (
            <div style={styles.content}>{this.state.text}</div>
        )
    }
}
