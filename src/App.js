import React, {Component} from 'react';
import {createStore} from 'redux';
import Items from './Items';
import MessageBar from './MessageBar';
import Utils from './Utils';

let defaultState = {
    items: []
};

let backup = JSON.parse(localStorage.getItem("backup"));

let store;

if (backup) {
    console.log("Restoring backup...");
    store = createStore(Utils.reducer, backup);
} else {
    console.log("No backup found, going with clean state...");
    store = createStore(Utils.reducer, defaultState);
}

function backupState() {
    localStorage.setItem("backup", JSON.stringify(store.getState()));
}

setInterval(backupState, 10000);

class App extends Component {
    render() {
        return (
            <div>
                <Items/>
                <MessageBar/>
            </div>
        );
    }
}

export {App, store};
