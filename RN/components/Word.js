import React, { PureComponent } from 'react';
import {  Platform, StyleSheet, View, Text } from 'react-native';

export default class Word extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> componentText </Text>
      </View>
    );
  }
}
