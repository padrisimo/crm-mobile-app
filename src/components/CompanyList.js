import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: 10,
    backgroundColor: '#e5e5e5',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 10
  },
});

class CompanyList extends Component {
  static navigationOptions = {
    tabBar: {
      label: 'Companies',
      icon: ({ tintColor }) => (

        <Icon
          name={'business'}
          size={45}
          style={[{ color: tintColor }, styles.icon]}
        />
      )
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Companies</Text>
      </View>
    )
  }
}



export default CompanyList;