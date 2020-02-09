import React, {Component} from 'react';
import {View, Picker, StyleSheet} from 'react-native';

export default class Operacao extends Component {
  constructor(props) {
    super(props);

    this.state = {operacao: ''};
  }
  render() {
    return (
      <View>
        <Picker
          style={styles.operacao}
          selectedValue={this.state.operacao}
          onValueChange={op => {
            this.setState({operacao: op});
          }}>
          <Picker.Item label="Soma" value="soma" />
          <Picker.Item label="Subtração" value="subtracao" />
          <Picker.Item label="Multiplicação" value="multiplicacao" />
          <Picker.Item label="Divisão" value="divisao" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  operacao: {
    marginTop: 15,
    marginBottom: 15,
  },
});