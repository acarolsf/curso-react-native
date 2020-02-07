import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Sobre extends Component {
  render() {
    return (
      <View style={styles.content}>
        <Text>Aqui podem ser apresentadas informações sobre o jogo</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#61BD8C',
  },
});
