import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import { text } from '../../components/text';

const ContactListScreen = ({ navigation }) => {
  const fakeContacts = [
    { id: 1, name: 'John Doe', phoneNumber: 'xxx-xxx-xxxx' },
    { id: 2, name: 'Jane Smith', phoneNumber: 'yyy-yyy-yyyy' },
    { id: 1, name: 'John Doe', phoneNumber: 'xxx-xxx-xxxx' },
    { id: 2, name: 'Jane Smith', phoneNumber: 'yyy-yyy-yyyy' },
    { id: 1, name: 'John Doe', phoneNumber: 'xxx-xxx-xxxx' },
    { id: 2, name: 'Jane Smith', phoneNumber: 'yyy-yyy-yyyy' },
    // 添加更多的虛構聯絡人
  ];

  const handleContactPress = (contact) => {
    navigation.navigate('Chat', { contact });
  };

  const renderContactItem = ({ item }) => (
    <TouchableOpacity style={styles.contactItem} onPress={() => handleContactPress(item)}>
      <Text style={styles.text}>{item.name || 'Unknown'}</Text>
      <Text style={styles.text_2}>{item.phoneNumber}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={fakeContacts}
      renderItem={renderContactItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.contactList}
    />
  );
};

const styles = StyleSheet.create({
  contactList: {
    flex: 1,
  },
  contactItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text:{
    fontSize:40
  },
  text_2:{
    fontSize:30
  }
});

export default ContactListScreen;
