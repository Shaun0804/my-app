// ContactListScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import * as Contacts from 'expo-contacts';

const ContactListScreen = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();

    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Name],
      });

      if (data.length > 0) {
        setContacts(data);
      }
    }
  };

  const handleContactPress = (contact) => {
    // 導航到聊天畫面，並將選擇的聯絡人傳遞過去
    navigation.navigate('Chat', { contact });
  };

  const renderContactItem = ({ item }) => (
    <TouchableOpacity style={styles.contactItem} onPress={() => handleContactPress(item)}>
      <Text>{item.name || 'Unknown'}</Text>
      {item.phoneNumbers && item.phoneNumbers.length > 0 && (
        <Text>{item.phoneNumbers[0].number}</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={contacts}
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
});

export default ContactListScreen;
