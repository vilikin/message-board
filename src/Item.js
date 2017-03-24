/**
 * Created by vili on 21/03/2017.
 */
import React, {Component} from 'react';
import {store} from './App';

class Item extends Component {
    plus = (e) => {
        e.stopPropagation();
        store.dispatch({
            type: "UPVOTE_ITEM",
            id: this.props.data.id
        });
    };

    minus = (e) => {
        e.stopPropagation();
        store.dispatch({
            type: "DOWNVOTE_ITEM",
            id: this.props.data.id
        });
    };

    deleteItem = () => {
        let pw = prompt("", "");

        switch (pw) {

            case "evvk":
                store.dispatch({
                    type: "DELETE_ITEM",
                    id: this.props.data.id
                });

                return;

            case "delallEvvk":
                store.dispatch({
                    type: "DELETE_ALL_ITEMS"
                });

                return;

            default:
                return;
        }
    };

    render() {
        return <div className={this.props.data.color + " item"} onDoubleClick={this.deleteItem}>
            <div className="jdl-text">
                <div className="jdl-text-content">{this.props.data.message}</div>
            </div>
            <div className="jdl-votes">
                <div className="jdl-vote-block">
                    <i className="fa fa-arrow-circle-up" onDoubleClick={this.plus} onClick={this.plus}/>
                </div>

                <div className="jdl-vote-block">
                    {this.props.data.votes}
                </div>

                <div className="jdl-vote-block">
                    <i className="fa fa-arrow-circle-down" onDoubleClick={this.minus} onClick={this.minus}/>
                </div>
            </div>
        </div>;
    }
}

export default Item;