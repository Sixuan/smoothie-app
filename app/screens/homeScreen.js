import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StatusBarBackground from '../components/StatusBarBackground';
import ViewContainer from '../components/ViewContainer';

class HomeScreen extends Component {
  render(){
    return (
      <ViewContainer>
        <StatusBarBackground />
        <Text>Home page</Text>
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  homeScreen: {

  }
});

module.exports = HomeScreen;
