import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const MoneyManagerScreen = () => {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState(0);

  const addExpense = () => {
    if (amount === '') {
      alert('請輸入金額');
      return;
    }

    const expense = {
      id: expenses.length + 1,
      amount: parseFloat(amount),
      timestamp: new Date(),
    };

    setExpenses([...expenses, expense]);
    setBalance((prevBalance) => prevBalance - parseFloat(amount));
    setAmount('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>金錢控管</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="金額"
          keyboardType="numeric"
          value={amount}
          onChangeText={(text) => setAmount(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addExpense}>
          <Text style={styles.addButtonText}>記錄花費</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.balance}>餘額: ${balance.toFixed(2)}</Text>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <Text>{`支出: $${item.amount.toFixed(2)}`}</Text>
            <Text>{`時間: ${item.timestamp.toLocaleString()}`}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    padding: 8,
    borderRadius: 8,
  },
  addButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  balance: {
    fontSize: 18,
    marginBottom: 10,
  },
  expenseItem: {
    marginBottom: 10,
  },
});

export default MoneyManagerScreen;
