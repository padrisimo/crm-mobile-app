import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native'
import { connect } from 'react-redux'
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import * as actions from '../actions';


class PeopleDeatil extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.prop,
    personSelected: state.personSelected
  }
}

export default connect(mapStateToProps, actions)(PeopleDeatil)