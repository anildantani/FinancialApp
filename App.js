import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets } from '@react-navigation/stack'; // Import TransitionPresets
import TransactionsStack from './Screens/TransactionStack';
import SummaryScreen from './Screens/SummaryScreen';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { TransactionProvider } from './Screens/TransactionContext';

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

const tabBarOptions = {
  activeTintColor: 'blue',
  inactiveTintColor: 'gray',
};

export default function App() {
  return (
    <NavigationContainer>
      <TransactionProvider>
        <Tab.Navigator
          screenOptions={tabBarIconOptions}
          tabBarOptions={tabBarOptions}
        >
          <Tab.Screen
            name="Transactions"
            component={TransactionsStack}
            options={{
              headerTitle: "FinancialApp",
              headerStyle: {
                backgroundColor: '#39b8cc',
              },
              headerTitleStyle: {
                color: 'white',
                fontSize: 30,
              },
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
          <Tab.Screen
            name="Summary"
            component={SummaryScreen}
            options={{
              headerTitle: "FinancialApp",
              headerStyle: {
                backgroundColor: '#39b8cc',
               
              },
              headerTitleStyle: {
                color: 'white',
                fontSize: 30,
              },
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
        </Tab.Navigator>
      </TransactionProvider>
    </NavigationContainer>
  );
}
