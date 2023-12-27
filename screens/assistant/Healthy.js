import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Audio } from 'expo-av';
import { GiftedChat } from 'react-native-gifted-chat';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = useState();

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: '請記得您要在吃完晚餐之後吃藥並檢測血壓喔',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'ChatBot',
        },
      },
    ]);
  }, []);

  const handleSend = (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
  };

  const startRecording = async () => {
    try {
      setIsRecording(true);
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();
      setRecording(recording);
    } catch (error) {
      console.error('Error starting recording', error);
    }
  };

  const stopRecording = async () => {
    try {
      setIsRecording(false);
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      handleSend([
        {
          _id: messages.length + 1,
          audio: uri,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'ChatBot',
          },
        },
      ]);
    } catch (error) {
      console.error('Error stopping recording', error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding:0' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}  // 調整這個數值
      style={{ flex: 0.975 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <GiftedChat
            messages={messages}
            onSend={(newMessages) => handleSend(newMessages)}
            user={{
              _id: 1,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
      
    </KeyboardAvoidingView>
  );
}
