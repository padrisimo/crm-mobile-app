import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native'
import { connect } from 'react-redux'
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import * as actions from '../actions';


class PeopleDeatil extends Component {
  handleClick = (link) => Linking.canOpenURL(link).then(supported => 
    supported ? Linking.openURL(link) : console.log(`Can't open uri: ${link}`)
  )
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require('../images/background.jpg')}
          style={[theme.cardImageStyle, styles.image]}
        />
        <EvilIcon name={'user'} size={100} styles={styles.icon} />
        <SimpleIcon name={'user'} size={30} styles={styles.closeicon}
          onPress={() => this.props.noneSelected()}
        />
        <Text style={[theme.cardTitleStyle, style.title1]}>
          {this.props.person.first_name} {this.props.person.last_name}
        </Text>
        <Text style={[theme.cardTitleStyle, style.title2]}>
          from {this.props.person.company}
        </Text>
        <View style={styles.textArea}>
          <MaterialIcon name={'phone'} size={40} style={styles.textIcons} />
          <Text style={theme.cardContentStyle}>
            {this.props.person.phone}
          </Text>
        </View>
        <View style={styles.textArea}>
          <MaterialIcon name={'email'} size={40} style={styles.textIcons} />
          <Text style={theme.cardContentStyle}>
            {this.props.person.email}
          </Text>
        </View>
        <View style={styles.textArea}>
          <MaterialIcon name={'assignment'} size={40} style={styles.textIcons} />
          <Text style={theme.cardContentStyle}>
            {this.props.person.project}
          </Text>
        </View>
        <View style={styles.textArea}>
          <MaterialIcon name={'mode-edit'} size={40} style={styles.textIcons} />
          <Text style={theme.cardContentStyle}>
            {this.props.person.notes}
          </Text>
        </View>
        <View style={styles.actionArea}>
          <TouchableOpacity 
            onPress={() => this.handleClick(`tel:${this.props.person.phone}`)}          
          >
            <Image src={require('../images/call@2x.png')} style={styles.actionImage}/>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => this.handleClick(`sms:${this.props.person.phone}`)}          
          >
            <Image src={require('../images/sms@2x.png')} style={styles.actionImage}/>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => this.handleClick(`mailto:${this.props.person.email}`)}          
          >
            <Image src={require('../images/email@2x.png')} style={styles.actionImage}/>
          </TouchableOpacity>
          <View style={styles.actionArea}>
            <Text>Call</Text>
            <Text>SMS</Text>
            <Text>Emaill</Text>
          </View>
        </View>
      </ScrollView>
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