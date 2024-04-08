import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { fetchTransactiondetails, firestore } from "../firebase";
import { deleteDoc, doc } from 'firebase/firestore';

function TransactionDetailScreen({ route, navigation }) {
  const { transactionId } = route.params;
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    const loadTransaction = async () => {
      const transactionData = await fetchTransactiondetails(transactionId);
      setTransaction(transactionData);
    };

    loadTransaction();
  }, [transactionId]);

  const handleDeleteTransaction = async () => {
    try {
      const transactionRef = doc(firestore, 'transactions', transactionId);
      await deleteDoc(transactionRef);
      console.log("Transaction deleted successfully");
      navigation.goBack();
    } catch (error) {
      console.error("Error deleting transaction:", error);
      Alert.alert("Error", "Failed to delete transaction. Please try again.");
    }
  };

  if (!transaction) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.amount}>${transaction.amount}</Text>
        <Text style={styles.title}>{transaction.name}</Text>
        <Text style={styles.location}>{transaction.location}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.date}>Transaction date:</Text>
        <Text style={styles.date}>{transaction.date}</Text>
      </View>
      <TouchableOpacity style={styles.deleteBtn} onPress={handleDeleteTransaction}>
        <Text style={styles.deleteBtnText}>Delete Transaction</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 25,
    padding: 10,
    backgroundColor: "#F0F0F0",
  },
  detailsContainer: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
    color: "#333333",
  },
  amount: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#008000",
    textAlign: "center",
  },
  location: {
    fontSize: 18,
    color: "#666666",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  date: {
    fontSize: 18,
    color: "#666666",
  },
  deleteBtn: {
    backgroundColor: "red",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  deleteBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default TransactionDetailScreen;
