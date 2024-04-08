import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TransactionsStack from './Screens/TransactionStack';
import SummaryScreen from './Screens/SummaryScreen';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const tabBarIconOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    if (route.name === 'Transactions') {
      return <FontAwesome6 name="money-bill-transfer" size={24} color={focused ? 'blue' : 'gray'} />;
    } else if (route.name === 'Summary') {
      return <MaterialIcons name="summarize" size={size} color={focused ? 'blue' : 'gray'} />;
    }
  },
});

const headerOptions = {
  headerTitleStyle: {
    color: 'white',
    fontSize: 30,
  },
  headerStyle: {
    backgroundColor: '#39b8cc',
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={tabBarIconOptions}
        tabBarOptions={{ activeTintColor: 'blue', inactiveTintColor: 'gray' }}
      >
        <Tab.Screen
          name="Transactions"
          component={TransactionsStack}
          options={{
            ...headerOptions,
            headerTitle: 'FinancialApp',
          }}
        />
        <Tab.Screen
          name="Summary"
          component={SummaryScreen}
          options={{
            ...headerOptions,
            headerTitle: 'FinancialApp',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
