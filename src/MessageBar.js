/**
 * Created by vili on 21/03/2017.
 */
import React, { Component } from 'react';
import {store} from './App';
import $ from "jquery";


class MessageBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: ""
        };
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        if (this.state.message.length > 1) {
            store.dispatch({type: "ADD_ITEM", message: this.state.message});
            this.setState({message: ""});
            $("html, body").animate({ scrollTop: 0 }, "slow");
        }
    };

    onFormChange = (e) => {
        let value = e.target.value;
        this.setState({message: value});
    };

    render() {
        return (
            <div className="msg-bar">
            <form onSubmit={this.onFormSubmit}>
                <input type="text" placeholder="Write something..." onChange={this.onFormChange}
                       value={this.state.message}/>
            </form>
            </div>
        );
    }
}

export default MessageBar;
