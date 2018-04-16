import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Login from './Login';
import Loader from './Loader';
import Navigation from './Navigation';
import reducers from '../reducers/PeopleReducer';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAF4ghatT8AcAkIHfdT7wJKggbg10f8mWA",
      authDomain: "crmmobile-bff8f.firebaseapp.com",
      databaseURL: "https://crmmobile-bff8f.firebaseio.com",
      projectId: "crmmobile-bff8f",
      storageBucket: "crmmobile-bff8f.appspot.com",
      messagingSenderId: "608651749643"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    })
  }

  renderIntialView() {
    switch (this.state.loggedIn) {
      case true:
        return <Navigation />;
      case false:
        return <Login />;
      default:
        return <Loader size="large" />
    }
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {this.renderIntialView()}
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
