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


//---importlarım-----
import { createStore } from 'redux';
//useSelector: state'lere ulaşmamızı sağlar.
// useDispatch: reduce'lara erişmemi sağlıyor. 
import { Provider, useSelector, useDispatch } from 'react-redux';

//STORE
//global olarak tutacağım state'leri taımlıyorum.
const initialState = {
  counter: 0,
}


//REDUCER
//Reducer bir uygulamanın state’indeki gerçekleşecek değişiklikleri belirleyen fonksiyondur.
//Actionlar ise bu değişikliği belirlemek için kullanılır. (nasıl yapacağımız) 
//state: global tutttuğum parametreler
function reducers(state, action) {
  switch (action.type) { //hangi işlemi gerçekleştirmek istedğimi belirttim
    case 'UPDATE_COUNTER':
      return { ...state, counter: state.counter + 1 }; //güncellediğimi geri gönderiyorum. State paramaetresindeki counterı bir artırıp geri gönderdim.
    default:
      return state;
  }
}

export default () => {
  return (
    //PROVIDE
    <Provider store={createStore(reducers, initialState)}>
      <SafeAreaView style={{ flex: 1 }}>
        <First />
        <Second />
      </SafeAreaView>
    </Provider>
  );
}



//First ve Second ayrı ayrı js dosyası olarak düşün.

const First = () => {

  //global counter değerime erişiyorum. selector=initialState
  const counter = useSelector(selector => selector.counter);

  //reducer'ları tetikliyorum.
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

  //global counter değerime erişiyorum. selector=initialState
  const counter = useSelector(selector => selector.counter);

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 30 }}>Second: {counter}</Text>
    </View>
  )
}