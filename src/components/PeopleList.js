import React, { Component } from 'react'
import { ListView, Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import PersonItem from './PersonItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 353,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 20,
  }
});

class PeopleList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHaschanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.people);
  }
  render() {
    return (
      <View>
        <ListView 
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={(rowData) => 
            <PersonItem people={rowData} />
          }
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    people: state.people
  }
}


export default connect(mapStateToProps)(PeopleList);