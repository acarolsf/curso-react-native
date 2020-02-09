import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Cabecalho = props => (
  <View style={styles.topo}>
    <Text style={styles.txtTopo}>Calculadora</Text>
  </View>
);

const styles = StyleSheet.create({
  topo: {
    backgroundColor: '#2196F3',
    padding: 10,
    alignItems: 'center',
  },
  txtTopo: {
    fontSize: 25,
    color: '#fff',
  },
});

export {Cabecalho};
