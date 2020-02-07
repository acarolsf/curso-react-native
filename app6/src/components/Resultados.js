import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';

const cara = require('../../img/moeda_cara.png');
const coroa = require('../../img/moeda_coroa');
export default class Resultados extends Component {
  constructor(props) {
    super(props);

    this.state = {resultado: ''};
  }
  componentWillMount() {
    const numAleatorio = Math.floor(Math.random() * 2);

    let moeda = '';
    if (numAleatorio === 0) {
      moeda = 'cara';
    } else {
      moeda = 'coroa';
    }

    this.setState({resultado: moeda});
  }
  render() {
    if (this.state.resultado === 'cara') {
      return (
        <View style={styles.content}>
          <Image source={cara} />
        </View>
      );
    }
    return (
      <View style={styles.content}>
        <Image source={coroa} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#61BD8C',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
