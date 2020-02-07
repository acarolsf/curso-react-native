import React, {Component} from 'react';
import {View, StatusBar, Image, StyleSheet, Text} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalhe = require('../../img/detalhe_servico.png');

export default class CenaServico extends Component {
  render() {
    return (
      <View style={styles.content}>
        <StatusBar backgroundColor="#19D1C8" />
        <BarraNavegacao
          voltar
          navigator={this.props.navigator}
          backColor="#19D1C8"
        />
        <View style={styles.cabecalho}>
          <Image source={detalhe} />
          <Text style={styles.txtTitulo}>Nossos Serviços</Text>
        </View>
        <View style={styles.detalhes}>
          <Text style={styles.txtDetalhe}>Consultoria</Text>
          <Text style={styles.txtDetalhe}>Processos</Text>
          <Text style={styles.txtDetalhe}>Acompanhamento de Projetos</Text>
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
    color: '#19D1C8',
    marginLeft: 10,
    marginTop: 25,
  },
  detalhes: {
    padding: 20,
    marginTop: 20,
  },
  txtContatos: {
    fontSize: 18,
  },
});
