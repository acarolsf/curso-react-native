import React, {Component} from 'react';
import {View, TextInput, Button, StyleSheet, Image} from 'react-native';
import {connect} from 'react-redux';
import {
  modificaEmail,
  modificaSenha,
  modificaNome,
  cadastraUsuario,
} from './actions/AutenticacaoActions';

class formCadastro extends Component {
  _cadastrar() {
    const {nome, email, senha} = this.props;
    this.props.cadastraUsuario({nome, email, senha});
  }
  render() {
    return (
      <Image style={styles.bg} source={require('../img/bg.png')}>
        <View style={styles.content}>
          <View style={styles.form}>
            <TextInput
              value={this.props.nome}
              placeholder="Nome"
              placeholderTextColor="#fff"
              style={styles.input}
              onChangeText={texto => this.props.modificaNome(texto)}
            />
            <TextInput
              value={this.props.email}
              placeholder="Email"
              placeholderTextColor="#fff"
              style={styles.input}
              onChangeText={texto => this.props.modificaEmail(texto)}
            />
            <TextInput
              value={this.props.senha}
              placeholder="Senha"
              placeholderTextColor="#fff"
              secureTextEntry
              style={styles.input}
              onChangeText={texto => this.props.modificaSenha(texto)}
            />
          </View>
          <View style={styles.botao}>
            <Button
              title="Cadastrar"
              color="#115E54"
              onPress={() => this._cadastrar()}
            />
          </View>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 10,
  },
  bg: {
    flex: 1,
    // width: null,
  },
  form: {
    flex: 4,
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    // height: 45, // no android nao é necessario
  },
  botao: {
    flex: 1,
  },
});

const mapStateToProps = state => ({
  nome: state.AutenticacaoReducer.nome,
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha,
});
export default connect(
  mapStateToProps,
  {modificaEmail, modificaSenha, modificaNome, cadastraUsuario},
)(formCadastro);
