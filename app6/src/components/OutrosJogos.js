import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class OutrosJogos extends Component {
  render() {
    return (
      <View style={styles.content}>
        <Text>
          Aqui podem ser apresentadas informações sobre outros jogos do
          desenvolvedor
        </Text>
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
