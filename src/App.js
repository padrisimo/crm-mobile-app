import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import Login from './Login';
import Loader from './Loader';
import PeopleList from './PeopleList';


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

  renderIntialView(){
    switch (this.state.loggedIn) {
      case true:
        return <PeopleList />;
      case false:
        return <Login />;
      default:
        return <Loader size="large" />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderIntialView()}
      </View>
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
