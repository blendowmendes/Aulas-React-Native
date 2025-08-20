import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  telaPincipal: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnAdicionarItem: {
    width:'75%',
    margin: 20
  },

  telaModalExterno: {
    flex: 1,
    backgroundColor: '#000000c0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalConteudo: {
    alignItems: 'center',
    width: 300,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    textAlign: 'center'
  },

  textModal: {
    fontSize: 25
  },

  inputModal: {
    width: '100%',
    margin: 5,
    borderWidth: 1,
    borderColor: '#0000003d',
    borderRadius: 5
  },

  btnsModal: {
    width: '100%',
    margin: 10,
    justifyContent: 'space-between',
    gap: 10
  },

  lista: {
    marginTop:50,
    width: '100%'
  },

  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#a54c4cff'
  },

  imgList: {
    width: 100,
    height: 100
  }
});