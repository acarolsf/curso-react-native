import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default props => (
  <View>
    <TextInput
      style={styles.numero}
      value={props.num}
      onChangeText={valor => props.atualizaValor(props.nome, valor)}
    />
  </View>
);

const styles = StyleSheet.create({
  numero: {
    width: 140,
    height: 80,
    fontSize: 30,
    borderBottomColor: 'green',
    borderBottomWidth: 2,
  },
});
