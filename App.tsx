import { useState } from 'react';
import { Button, Modal, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);



  return (
    <SafeAreaView style={styles.telaPincipal}>
      <Button
        title='Adicionar Item'
        onPress={() => setModalVisible(true)}
      />

      <Modal visible={modalVisible}  transparent={true}>
        <View style={styles.telaModalExterno}>
          <View style={styles.modalConteudo}>
            <Text>conteudoModal</Text>
            <Button title='Fechar' onPress={() => {setModalVisible(false)}}/>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  telaPincipal: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
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
  }
});
