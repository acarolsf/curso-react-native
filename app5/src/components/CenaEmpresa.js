import React, {Component} from 'react';
import {View, StatusBar, Image, StyleSheet, Text} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalhe = require('../../img/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
  render() {
    return (
      <View style={styles.content}>
        <StatusBar backgroundColor="#EC7148" />
        <BarraNavegacao
          voltar
          navigator={this.props.navigator}
          backColor="#EC7148"
        />
        <View style={styles.cabecalho}>
          <Image source={detalhe} />
          <Text style={styles.txtTitulo}>A Empresa</Text>
        </View>
        <View style={styles.detalhes}>
          <Text style={styles.txtDetalhe}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{' '}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20,
  },
  txtTitulo: {
    fontSize: 30,
    color: '#EC7148',
    marginLeft: 10,
    marginTop: 25,
  },
  detalhes: {
    padding: 20,
    marginTop: 20,
  },
  txtDetalhe: {
    fontSize: 18,
  },
});
