import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TransactionContext } from './TransactionContext';

function SummaryScreen() {
  const { transactions } = useContext(TransactionContext);

  const totalExpenses = transactions.reduce((total, transaction) => total + parseFloat(transaction.amount), 0);

  let highestSpending = null;
  let lowestSpending = null;

  transactions.forEach(transaction => {
    const amount = parseFloat(transaction.amount);

    if (!highestSpending || amount > highestSpending.amount) {
      highestSpending = { ...transaction, amount };
    }

    if (!lowestSpending || amount < lowestSpending.amount) {
      lowestSpending = { ...transaction, amount };
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>
      <View style={styles.box}>
        <View style={styles.row}>
          <Text style={styles.label}>Total Transactions:</Text>
          <Text style={styles.value}>{transactions.length}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.label}>Total Expenses:</Text>
          <Text style={styles.value}>${totalExpenses.toFixed(2)}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.label}>Highest Spending:</Text>
          <Text style={styles.value}>{highestSpending ? `${highestSpending.name}: $${highestSpending.amount.toFixed(2)}` : '-'}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.label}>Lowest Spending:</Text>
          <Text style={styles.value}>{lowestSpending ? `${lowestSpending.name}: $${lowestSpending.amount.toFixed(2)}` : '-'}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  box: {
    borderWidth: 1,
    borderColor: '#39b8cc',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
});

export default SummaryScreen;
