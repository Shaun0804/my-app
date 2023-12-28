import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Audio } from 'expo-av';
import { GiftedChat } from 'react-native-gifted-chat';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = useState([]);

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
    const userMessage = newMessages[0];
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));

    // 模擬一個簡單的回應邏輯
    if (userMessage.text && userMessage.text.includes('吃藥')) {
      const response = {
        _id: messages.length + 1,
        text: '已幫你紀錄新活動，將會在晚上6:00體醒你要吃藥',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'ChatBot',
        },
      };
      setTimeout(() => {
        setMessages((prevMessages) => GiftedChat.append(prevMessages, [response]));
      }, 500); // 模擬延遲
    }
    else if (userMessage.text && userMessage.text.includes('回診')) {
      // 天氣相關的回覆
      const response = {
        _id: messages.length + 1,
        text: '已幫你紀錄新活動，將會在3月28體醒你要回診',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'ChatBot',
        },
      };
      setTimeout(() => {
        setMessages((prevMessages) => GiftedChat.append(prevMessages, [response]));
      }, 500); // 模擬延遲
    }
    // 可以根據需求添加更多情況
  };

  const startRecording = async () => {
    try {
      setIsRecording(true);
      const recordingInstance = new Audio.Recording();
      await recordingInstance.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recordingInstance.startAsync();
      setRecording(recordingInstance);
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
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      style={{ flex: 1 }}
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
