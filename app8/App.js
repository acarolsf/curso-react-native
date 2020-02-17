import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './routes';
import reducers from './src/reducers';

class App extends Component {
  componentDidMount() {
    var firebaseConfig = {
      apiKey: 'AIzaSyBIzNb7d-xvU13DxSGjmVm9Psg-lz-wRc0',
      authDomain: 'whatsapp-clone-e1809.firebaseapp.com',
      databaseURL: 'https://whatsapp-clone-e1809.firebaseio.com',
      projectId: 'whatsapp-clone-e1809',
      storageBucket: 'whatsapp-clone-e1809.appspot.com',
      messagingSenderId: '1083358252110',
      appId: '1:1083358252110:web:e1c2bc4f7d3f2296a8871f',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}
export default App;
