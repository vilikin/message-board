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
            <table>
                <tbody>
                <tr>
                    <td>
                        <span className="jdl-text">
                            {this.props.data.message}
                        </span>
                    </td>
                    <td className="text-center">

                            <div className="row">
                                <i className="fa fa-arrow-circle-up" onDoubleClick={this.plus} onClick={this.plus}/>
                            </div>

                            <div className="row">
                                <span>{this.props.data.votes}</span>
                            </div>

                            <div className="row">
                                <i className="fa fa-arrow-circle-down" onDoubleClick={this.minus} onClick={this.minus}/>
                            </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>;
    }
}

export default Item;