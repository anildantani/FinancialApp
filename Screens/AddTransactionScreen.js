import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { firestore } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function AddTransactionScreen({ navigation }) {
  const [transaction, setTransaction] = useState({
    name: '',
    amount: '',
    location: '',
    date: '',
  });

  const handleInputChange = (key, value) => {
    setTransaction({ ...transaction, [key]: value });
  };

  const handleAddTransaction = async () => {
    try {
      const transactionsCollection = collection(firestore, 'transactions');

      const newTransaction = {
        ...transaction,
        amount: parseFloat(transaction.amount),
      };

      await addDoc(transactionsCollection, newTransaction);

      setTransaction({
        name: '',
        amount: '',
        location: '',
        date: '',
      });

      navigation.navigate('Transactions List');
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          value={transaction.name}
          onChangeText={(text) => handleInputChange('name', text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Amount:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Amount"
          value={transaction.amount}
          onChangeText={(text) => handleInputChange('amount', text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Location:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Location"
          value={transaction.location}
          onChangeText={(text) => handleInputChange('location', text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Date"
          value={transaction.date}
          onChangeText={(text) => handleInputChange('date', text)}
        />
      </View>
      <TouchableOpacity style={styles.addBtn} onPress={handleAddTransaction}>
        <Text style={styles.addBtnText}>Add Transaction</Text>
      </TouchableOpacity>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#ECFFDC',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addBtn: {
    backgroundColor: "#3cb5d6",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: "center",
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#ECFFDC",
  },
  addBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ECFFDC',
    textAlign: 'center',
  },
});

export default AddTransactionScreen;
