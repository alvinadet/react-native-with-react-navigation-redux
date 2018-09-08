import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/';
import todosReducer from './Todos';

// Start with two routes: The Main screen, with the Login screen on top.
const action = AppNavigator.router.getActionForPathAndParams('Home');
const initialNavState = AppNavigator.router.getStateForAction(action);


function nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        case 'Login':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            break;
        case 'CreateData':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'CreateData' }),
                state
            );
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    // const nextState =;

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}



const AppReducer = combineReducers({
    nav,
    todosReducer
});

export default AppReducer;