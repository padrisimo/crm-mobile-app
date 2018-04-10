import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import Loader from './Loader';
import firebase from 'firebase';

const LoginButton = MKButton.coloredButton()
  .withText('LOGIN')
  .build();

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onButtonPress = () => {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onAuthSucces)
      .cath(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onAuthSucces)
          .cath(this.onAuthFailed)
          
      })
  }

  onAuthSucces = () => {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    })
  }

  onAuthFailed = () => {
    this.setState({
      error: 'Authentication Failed!',
      loading: false
    })
  }

  renderLoader = () => {
    if (this.state.loading) {
      return <Loader size="large" />
    } else {
      return <LoginButton onPress={this.onButtonPress} />
    }
  }

  render() {
    const { form, fieldStyles, loginButtonArea, errorMessage } = styles;
    return (
      <View style={form}>
        <Text>
          Login or Create an account
        </Text>
        <MKTextField
          text={this.state.email}
          onTextChange={email => this.setState({ email })}
          textInputStyle={fieldStyles}
          placeholder={'Email...'}
          tintColor={MKColor.Teal}
        />
        <MKTextField
          text={this.state.password}
          onTextChange={password => this.setState({ password })}
          textInputStyle={fieldStyles}
          placeholder={'password...'}
          tintColor={MKColor.Teal}
          password={true}
        />
        <Text style={errorMessage}>
          {this.state.error}
        </Text>
        <View style={loginButtonArea}>
          {this.renderLoader()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  form: {
    paddingBottom: 10,
    width: 200
  },
  fieldStyles: {
    height: 40,
    color: MKColor.Orange,
    width: 200
  },
  loginButtonArea: {
    marginTop: 20
  }
});
