import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Colors from '../../Utils/Colors';

// Exemplo de dados das conversas
const conversations = [
  { id: 1, contactName: 'Anya Padilha', lastMessage: 'Muito obrigada! Da ...', avatar: require('./../../../assets/images/Anya_Padilha.png') },
  { id: 2, contactName: 'Julio Anxovas', lastMessage: ':)', avatar: require('./../../../assets/images/Julio_Anxovas.png') },
  { id: 3, contactName: 'Anne Cooper', lastMessage: 'Ótimo atendimento!', avatar: require('./../../../assets/images/Anne_Cooper.png') },
  { id: 4, contactName: 'Pedro Gomes', lastMessage: 'Verdade!', avatar: require('./../../../assets/images/Pedro_Gomes.png') },
  { id: 5, contactName: 'Marcos Polo', lastMessage: 'Tudo certo, obrigad...', avatar: require('./../../../assets/images/Marcos_Polo.png') },
  // Adicione mais dados das conversas conforme necessário
];

export default function ConversationsScreen({ navigation }) {
  const renderConversationItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Chat', { contactId: item.id, contactName: item.contactName })}
    >
      <Image source={item.avatar} style={styles.avatar}/>
      <View style={styles.textContainer}>
        <Text style={styles.onlineText}><View style={styles.onlineStatus}></View> Online</Text> 
        <Text style={styles.contactName}>{item.contactName}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>       
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversas</Text>
      <FlatList
        data={conversations}
        renderItem={renderConversationItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BRANCO,
  },
  titulo: {
    textAlign: 'left',
    marginLeft: 10,
    marginTop: 50,
    fontSize: 30,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: Colors.AZURE,
    borderBottomWidth: 1,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.MALTE,
  },
  lastMessage: {
    fontSize: 16,
    color: Colors.AZURE,
    marginTop: 5,
  },
  onlineText: {
    textAlign: 'right',
    marginRight: 20,
    color: Colors.AZUL_PACIFICO, 
  },
    onlineStatus: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green', 
    marginLeft: 1,
  }
});
