import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const Visor = props => (
  <View>
    <TextInput
      style={styles.inputResultado}
      placeholder="Resultado"
      editable={false}
    />
  </View>
);

const styles = StyleSheet.create({
  inputResultado: {
    height: 150,
    fontSize: 50,
  },
});

export {Visor};
