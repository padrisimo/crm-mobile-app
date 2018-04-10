import React, { Component } from 'react';
import {  ActivityIndicator, View, Text, StyleSheet } from 'react-native';

const Loader = ({ size }) => {
  <View style={styles.loader}>
    <ActivityIndicator size={ size || "small"} />
  </View>
}

const styles = StyleSheet.create({
  loader : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});