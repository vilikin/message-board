/**
 * Created by vili on 21/03/2017.
 */
import React, {Component} from 'react';
import {store} from './App';
import Item from './Item';

class Items extends Component {
    constructor(props) {
        super(props);
        let items = store.getState().items;

        this.state = {items: items};
    }

    componentWillMount() {
        store.subscribe(() => {
            let items = store.getState().items;
            this.setState({
                items: items
            });
        });
    }

    render() {
        return <div className="item-container">
            {this.state.items.map((item) => {
                return <Item key={item.id} data={item}/>
            })}
        </div>;
    }
}

export default Items;