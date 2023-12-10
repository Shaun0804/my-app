import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, FlatList } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const SMSChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    // 初始化一個歡迎簡訊
    setMessages([
      {
        _id: 1,
        text: '記得吃藥！',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: '簡訊小助手',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
  };

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    const newMessage = {
      _id: messages.length + 1,
      text: inputText,
      createdAt: new Date(),
      user: {
        _id: 1,
        name: '我',
        avatar: 'https://placeimg.com/140/140/any',
      },
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputText('');
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={{ alignSelf: item.user._id === 1 ? 'flex-end' : 'flex-start', margin: 10 }}>
            <Text>{item.user.name}</Text>
            <Text style={{ backgroundColor: item.user._id === 1 ? 'lightblue' : 'lightgray', padding: 10, borderRadius: 8 }}>
              {item.text}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item._id.toString()}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
        <TextInput
          style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, marginRight: 10, padding: 8, borderRadius: 8 }}
          placeholder="輸入簡訊..."
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <TouchableOpacity onPress={sendMessage} style={{ padding: 10, backgroundColor: 'lightblue', borderRadius: 8 }}>
          <Text>發送</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SMSChatScreen;
