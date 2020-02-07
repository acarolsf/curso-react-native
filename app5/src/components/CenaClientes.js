import React, {Component} from 'react';
import {View, StatusBar, Image, StyleSheet, Text} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheCliente = require('../../img/detalhe_cliente.png');
const cliente1 = require('../../img/cliente1.png');
const cliente2 = require('../../img/cliente2.png');

export default class CenaClientes extends Component {
  render() {
    return (
      <View style={styles.content}>
        <StatusBar backgroundColor="#B9C941" />
        <BarraNavegacao
          voltar
          navigator={this.props.navigator}
          backColor="#B9C941"
        />
        <View style={styles.cabecalho}>
          <Image source={detalheCliente} />
          <Text style={styles.txtTitulo}>Nossos Clientes</Text>
        </View>
        <View style={styles.detalheCliente}>
          <Image source={cliente1} />
          <Text style={styles.txtDetalheCliente}>Loren ipson</Text>
        </View>
        <View style={styles.detalheCliente}>
          <Image source={cliente2} />
          <Text style={styles.txtDetalheCliente}>Loren ipson</Text>
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
    color: '#B9C941',
    marginLeft: 10,
    marginTop: 25,
  },
  detalheCliente: {
    padding: 20,
    marginTop: 10,
  },
  txtDetalheCliente: {
    fontSize: 18,
    marginLeft: 20,
  },
});
