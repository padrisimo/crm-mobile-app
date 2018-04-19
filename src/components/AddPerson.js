import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: 20,
    backgroundColor: '#e5e5e5',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 10
  },
  icon: {
    paddingBottom: 5,
  }
});

class AddPerson extends Component {
  static navigationOptions = {
    tabBarLabel: 'Add Person',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={'plus'}
        size={70}
        style={[{ color: tintColor }, styles.icon]}
      />
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Add Person</Text>
      </View>
    )
  }
}



export default AddPerson;