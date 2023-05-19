import React from "react";

//react-redux'tan provider'ı çağırdım.
import { Provider } from 'react-redux';
import { createStore } from "redux";

import reducers from './reducers';
import initialState from './Store'

const UserProvider = ({ childeren }) => {

    const store = createStore(reducers, initialState);

    return <Provider store={store}>{childeren}</Provider>
}


export default UserProvider;