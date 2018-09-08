import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator, addNavigationHelpers } from 'react-navigation';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';


import Home from '../screen/List';
import CreateData from '../screen/Add';



export const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    CreateData: { screen: CreateData },
});

const AppWithNavigationState = props => {
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
}

AppWithNavigationState.prototype = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    state: state.nav,
});



export default connect(mapStateToProps)(AppWithNavigationState);