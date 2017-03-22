/**
 * Created by vili on 22/03/2017.
 */

export default class Utils {
    static getNextColor(state) {
        let colors = {
            "item-color-1": 0,
            "item-color-2": 0,
            "item-color-3": 0,
            "item-color-4": 0,
            "item-color-5": 0
        };

        let colorKeys = Object.keys(colors);

        state.items.forEach((item) => {
            colors[item.color]++;
        });

        let min = colors[colorKeys[0]];

        colorKeys.forEach((key) => {
            if (colors[key] < min) {
                min = colors[key];
            }
        });

        colorKeys = colorKeys.filter((key) => {
            return colors[key] === min && !(state.items.length > 0 && key === state.items[0].color);
        });

        //console.log(colorKeys);

        return colorKeys[Math.floor(Math.random() * colorKeys.length)];
    }

    static reducer(state, action) {
        let newState = Object.assign({}, state);
        let currentTime = new Date().getTime();

        switch (action.type) {
            case 'ADD_ITEM':
                newState.items.unshift({
                    id: newState.items.length,
                    message: action.message,
                    votes: 0,
                    color: Utils.getNextColor(newState),
                    votelock: new Date().getTime()
                });

                return newState;
            case 'UPVOTE_ITEM':
                newState.items.map((item) => {
                    if (item.id === action.id && item.votelock <= currentTime) {
                        item.votes++;
                        item.votelock = currentTime + 1000;
                    }

                    return item;
                });

                return newState;
            case 'DOWNVOTE_ITEM':
                newState.items.map((item) => {
                    if (item.id === action.id && item.votelock <= currentTime) {
                        item.votes--;
                        item.votelock = currentTime + 1000;
                    }

                    return item;
                });

                return newState;

            case 'DELETE_ITEM':
                newState.items = newState.items.filter((item) => {
                    return item.id !== action.id;
                });

                return newState;

            case 'DELETE_ALL_ITEMS':
                newState.items = [];

                return newState;

            default:
                return state;
        }
    }
}
