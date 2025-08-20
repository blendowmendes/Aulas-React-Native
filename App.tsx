import React from 'react';
import { useState } from 'react';
import { styles } from './styles';

import { Button, Modal, FlatList, SafeAreaView, StyleSheet, Image, Text, View, TextInput } from 'react-native';

export default function App() {

  //Cria os estados padrão dos inputs e do modal
  const [modalVisible, setModalVisible] = useState(false);
  const [textoInput, setTextoInput] = useState("");
  const [textoDescricao, setTextoDescricao] = useState("");
  const [urlImagem, seturlImagem] = useState("");

  //Chat, me ajudou pois sem dizer qual tipo do array, qualquer push dá erro.
  type Item = { titulo: string, descricao: string, url: string };
  const [array, setItensArray] = useState<Item[]>([])

  //Função para adicionar os itens no array item que é rederizado pela FlatList
  const adicionouItem = () => {
    const valorTitulo = textoInput.trim();
    const valorDescricao = textoDescricao.trim();
    const valorUrl = urlImagem.trim();
    
    //cria um novo array adicionando o novo item
    const novoData = array.slice();
    novoData.push({ titulo: valorTitulo, descricao: valorDescricao, url: valorUrl});
    setItensArray(novoData);


    //Retorna os stados ao padrão inicial, que é vazio
    setTextoInput("");
    setTextoDescricao("");
    seturlImagem("");
    setModalVisible(false);
  };

  //Renderização dos itens pela FlatList
  const renderItem = ({ item }) => {
    const urlLink = item.url;
    return(
      <View style={styles.item}>
        <Text>{item.titulo}</Text>
        <Text>{item.descricao}</Text>

        <Image 
          style={styles.imgList} 
          source={{uri: urlLink}}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.telaPincipal}>
      {/*Código da FlatList*/}
      <FlatList
        data={array}
        renderItem={renderItem}
        keyExtractor={(item) => item.titulo}
        style={styles.lista}
      />

      {/*Daqui pra baixo é o Modal as funções atribuidas a ele*/}
      <View style={styles.btnAdicionarItem}>
        <Button
          title='Adicionar Item'
          onPress={() => setModalVisible(true)}
        />
      </View>

      <Modal 
        visible={modalVisible}  
        transparent={true}>

        <View style={styles.telaModalExterno}>

          <View style={styles.modalConteudo}>

            <Text style={styles.textModal}>Novo Item</Text>

            <TextInput 
              style={styles.inputModal} 
              placeholder="Titulo"
              value={textoInput}
              onChangeText={setTextoInput}>
            </TextInput>

            <TextInput 
              style={styles.inputModal} 
              placeholder="Descrição"
              value={textoDescricao}
              onChangeText={setTextoDescricao}>
            </TextInput>

            <TextInput 
              style={styles.inputModal} 
              placeholder="URL da imagem"
              value={urlImagem}
              onChangeText={seturlImagem}>
            </TextInput>

            <View style={styles.btnsModal}>
              <Button 
                title='ADICIONAR'
                onPress={adicionouItem}
              />
              <Button 
                color='#e74949ff' 
                title='Fechar' 
                onPress={() => {setModalVisible(false)}}/>
            </View>

          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}


