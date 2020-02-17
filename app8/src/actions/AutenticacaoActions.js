import firebase from 'firebase';

export const modificaEmail = texto => {
  return {
    type: 'modifica_email',
    payload: texto,
  };
};
export const modificaSenha = texto => {
  return {
    type: 'modifica_senha',
    payload: texto,
  };
};
export const modificaNome = texto => {
  return {
    type: 'modifica_nome',
    payload: texto,
  };
};
export const cadastraUsuario = ({nome, email, senha}) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, senha)
    .then(user => cadastraUsuarioSucesso())
    .catch(erro => cadastraUsuarioErro(erro));
};
const cadastraUsuarioSucesso = () => {
  return {
    type: 'teste',
  };
};

const cadastraUsuarioErro = erro => {
  return {
    type: 'teste',
  };
};
