import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Numero = props => (
  <View>
    <TextInput style={styles.numero} />
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

export {Numero};
