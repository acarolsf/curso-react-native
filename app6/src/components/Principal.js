import {View, Image, StyleSheet, TouchableHighlight, Text} from 'react-native';
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';

const logo = require('../../img/logo.png');
const btnJogar = require('../../img/botao_jogar.png');
const btnSobre = require('../../img/sobre_jogo.png');
const btnOutros = require('../../img/outros_jogos.png');

export default class Principal extends Component {
  render() {
    return (
      <View style={styles.content}>
        <View style={styles.apresentacao}>
          <Image source={logo} />
          <TouchableHighlight
            onPress={() => {
              Actions.resultado();
            }}>
            <Image source={btnJogar} />
          </TouchableHighlight>
        </View>
        <View style={styles.rodape}>
          <TouchableHighlight
            onPress={() => {
              Actions.sobrejogo();
            }}>
            <Image source={btnSobre} />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              Actions.outrosjogos();
            }}>
            <Image source={btnOutros} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    backgroundColor: '#61BD8C',
    flex: 1,
  },
  apresentacao: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rodape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
