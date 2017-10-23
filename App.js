import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './src/routes/router';
import store from './src/store';
import { Actions } from 'react-native-router-flux';
// import * as session from './util/session';

class App extends Component {
  componentWillMount() {
    // const config = {
    //   apiKey: '',
    //   authDomain: '',
    //   databaseURL: '',
    //   storageBucket: '',
    //   messagingSenderId: ''
    // };

    // firebase.initializeApp(config);
  }
  componentDidMount() {
    // Waits for the redux store to be populated with the previously saved state,
    // then it will try to auto-login the user.
    // const unsubscribe = store.subscribe(() => {
    //   if (store.getState().UtilReducer.persist.isHydrated) {
    //     unsubscribe();
    //     this.autoLogin();
    //   }
    // });
  }
  // autoLogin() {
  //   session.refreshToken().then(() => {
  //     console.log('refreshed');
  //   }).catch(() => {
  //     Actions.auth()
  //   });
  // }
  render() {
        return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
