import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TransactionContext } from "./TransactionContext";

function TransactionDetailScreen({ route }) {
  const { transactions } = useContext(TransactionContext);
  const { transactionId } = route.params;
  const transaction = transactions.find(
    (transaction) => transaction.id === transactionId
  );

  return (
    <View style={styles.container}>
      {transaction && (
        <View style={styles.detailsContainer}>
          <Text style={styles.amount}>${transaction.amount}</Text>
          <Text style={styles.title}>{transaction.name}</Text>
          <Text style={styles.location}>{transaction.location}</Text>
          <Text style={styles.date}>{transaction.date}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  detailsContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  amount: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  location: {
    fontSize: 20,
    textAlign: "center",
    color: "#666",
    marginBottom: 10,
  },
  date: {
    fontSize: 18,
    textAlign: "center",
    color: "#666",
  },
});

export default TransactionDetailScreen;
