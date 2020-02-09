/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Topo, Painel, Resultado} from './src/components/index';

const App = () => {
  return (
    <View>
      <Topo />
      <View style={styles.main}>
        <Resultado />
        <Painel />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 20,
  },
});

export default App;
