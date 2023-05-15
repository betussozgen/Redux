/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
} from 'react-native';



import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

//STORE
//global olarak tutacağım state'leri taımlıyorum.
const initialState = {
  counter: 0,
}


//REDUCER
function reducers(state, action) {
  switch (action.type) {
    case 'UPDATE_COUNTER':
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }

}

export default () => {
  return (
    <Provider store={createStore(reducers, initialState)}>
      <SafeAreaView style={{ flex: 1 }}>
        <First />
        <Second />
      </SafeAreaView>
    </Provider>
  );
}


const First = () => {

  const counter = useSelector(selector => selector.counter);

  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch({ type: 'UPDATE_COUNTER' })
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#eceff1' }}>
      <Text style={{ fontSize: 30 }}>First:  {counter}</Text>
      <Button title='UPDATE' onPress={handleUpdate} />
    </View>
  )
}

const Second = () => {

  const counter = useSelector(selector => selector.counter);

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 30 }}>Second: {counter}</Text>
    </View>
  )
}