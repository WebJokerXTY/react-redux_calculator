import * as ActionTypes from './ActionType';

export default (state = "Count: ", action) => {
    switch(action.type) {
        case ActionTypes.INCREMENT:
            return "Last step: Increase, Count: ";
        case ActionTypes.DECREMENT:
            return "Last step: Decrease, Count: ";
        default:
            return state;
    }
};