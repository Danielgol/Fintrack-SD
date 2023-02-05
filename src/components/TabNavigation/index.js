import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile from '../../pages/Profile';
import Home from '../../pages/Home';
import Calculator from '../../pages/Calculator';
import Study from '../../pages/Study';
import Quotes from '../../pages/Quotes';

function HomeScreen() {
  return (
    <Home></Home>
  );
}

function QuotesScreen(){
  return (
    <Quotes></Quotes>
  );
}

function CalculatorScreen() {
  return (
    <Calculator></Calculator>
  );
}

function StudyScreen(){
  return (
    <Study></Study>
  );
}

function ProfileScreen() {
  return (
    <Profile></Profile>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavbar() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarLabelStyle:{
            fontSize:10
          },
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Início') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'home'
                      : 'home-outline'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Calculadora') {
              return (
                <Ionicons
                  name={focused ? 'calculator' : 'calculator-outline'}
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === 'Cotações') {
              return (
                <Ionicons
                  name={focused ? 'trending-up' : 'trending-up-outline'}
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === 'Estudo') {
              return (
                <Ionicons
                  name={focused ? 'book' : 'book-outline'}
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === 'Perfil') {
              return (
                <Ionicons
                  name={focused ? 'person' : 'person-outline'}
                  size={size}
                  color={color}
                />
              );
            }
          },
          tabBarStyle: {
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: 'rgba(34,36,40,1)',
            position: 'absolute',
            borderTopWidth: 0,
        },
          tabBarInactiveTintColor: '#A9A9A9',
          tabBarActiveTintColor: '#6A5ACD',
        })}
      >
        <Tab.Screen
          name="Início"
          component={HomeScreen}
          options={{ tabBarBadge: 3 }}
        />
        <Tab.Screen name="Cotações" component={QuotesScreen} />
        <Tab.Screen name="Calculadora" component={CalculatorScreen} />
        <Tab.Screen name="Estudo" component={StudyScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}