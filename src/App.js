import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import Login from './Login';


export default class App extends Component{
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyAF4ghatT8AcAkIHfdT7wJKggbg10f8mWA",
      authDomain: "crmmobile-bff8f.firebaseapp.com",
      databaseURL: "https://crmmobile-bff8f.firebaseio.com",
      projectId: "crmmobile-bff8f",
      storageBucket: "crmmobile-bff8f.appspot.com",
      messagingSenderId: "608651749643"
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to CRM!
        </Text>
        <Login />
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
