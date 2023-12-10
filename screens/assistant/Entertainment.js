import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GameMenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Game1')}
      >
        <Text style={styles.buttonText}>遊戲1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Game2')}
      >
        <Text style={styles.buttonText}>遊戲2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Game3')}
      >
        <Text style={styles.buttonText}>遊戲3</Text>
      </TouchableOpacity>
      {/* 在這裡可以繼續添加更多遊戲的入口 */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 20,
    margin: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GameMenuScreen;
