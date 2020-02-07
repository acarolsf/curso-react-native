import React, {Component} from 'react';
import {View, StatusBar, Image, StyleSheet, Text} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalhe = require('../../img/detalhe_contato.png');

export default class CenaContatos extends Component {
  render() {
    return (
      <View style={styles.content}>
        <StatusBar backgroundColor="#61BD8C" />
        <BarraNavegacao
          voltar
          navigator={this.props.navigator}
          backColor="#61BD8C"
        />
        <View style={styles.cabecalho}>
          <Image source={detalhe} />
          <Text style={styles.txtTitulo}>Nossos Contatos</Text>
        </View>
        <View style={styles.detalheContatos}>
          <Text style={styles.txtContatos}>TEL: (11) 1234-5678</Text>
          <Text>CEL: (11) 1234-5678</Text>
          <Text>EMAIL: contato@atmconsultoria.com</Text>
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
    color: '#61BD8C',
    marginLeft: 10,
    marginTop: 25,
  },
  detalheContatos: {
    padding: 20,
    marginTop: 20,
  },
  txtContatos: {
    fontSize: 18,
  },
});
