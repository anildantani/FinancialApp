import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import TransactionsListScreen from "./TransactionsListScreen";
import TransactionDetailScreen from "./TransactionDetailScreen";
import AddTransactionScreen from "./AddTransactionScreen";

const Stack = createStackNavigator();

const headerOptions = {
  headerStyle: {
    backgroundColor: "transparent",
  },
  headerTitleStyle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
};

const CustomBackButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.customBackButton}>
    <Text style={styles.backButtonText}>←</Text>
  </TouchableOpacity>
);

function TransactionsStack() {
  return (
    <Stack.Navigator initialRouteName="Transactions List">
      <Stack.Screen
        name="Transactions List"
        component={TransactionsListScreen}
        options={{
          ...headerOptions,
          headerLeft: null,
        }}
      />
      <Stack.Screen
        name="Transaction Detail"
        component={TransactionDetailScreen}
        options={({ navigation }) => ({
          ...headerOptions,
          headerLeft: (props) => <CustomBackButton onPress={navigation.goBack} />,
        })}
      />
      <Stack.Screen
        name="Add Transaction"
        component={AddTransactionScreen}
        options={({ navigation }) => ({
          ...headerOptions,
          headerLeft: (props) => <CustomBackButton onPress={navigation.goBack} />,
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  customBackButton: {
    marginLeft: 15,
    marginTop: 21,
    padding: 10,
  },
  backButtonText: {
    color: 'blue',
    fontSize: 25,
  },
});

export default TransactionsStack;
