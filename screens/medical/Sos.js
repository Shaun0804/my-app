import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HelpScreen = () => {
  const [helpMessage, setHelpMessage] = useState('');

  const handleHelpPress = () => {
    // 在這裡處理一鍵求助的邏輯，例如發送求助信息、通知相關人員等
    setHelpMessage('求助已發送，等待幫助中...');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.settingsButton}>
        <Icon name="cog" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>一鍵求助</Text>
      <TouchableOpacity style={styles.helpButton} onPress={handleHelpPress}>
        <Text style={styles.helpButtonText}>求助</Text>
      </TouchableOpacity>
      <Text style={styles.helpMessage}>{helpMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  helpButton: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 8,
  },
  helpButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  helpMessage: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HelpScreen;
