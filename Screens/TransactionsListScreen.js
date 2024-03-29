import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TransactionContext } from './TransactionContext';

function TransactionsListScreen({ navigation }) {
  const { transactions } = useContext(TransactionContext);

  return (
    <View style={styles.container}>
      {transactions.map(transaction => (
        <TouchableOpacity 
          key={transaction.id} 
          style={styles.transactionContainer} 
          onPress={() => navigation.navigate('Transaction Detail', { transactionId: transaction.id })}
        >
          <View style={styles.transactionInfo}>
            <Text style={styles.transactionName}>{transaction.name}</Text>
            <View style={styles.amountContainer}>
              <Text style={styles.amount}>${transaction.amount}</Text>
              <Text style={styles.arrow}>→</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 25,
    backgroundColor: '#f0f0f0',
  },
  transactionContainer: {
    marginBottom: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  transactionInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amount: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  arrow: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default TransactionsListScreen;
