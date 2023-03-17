import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../../pages/Profile';
import Home from '../../pages/Home';
import Calculator from '../../pages/Calculator';
import Study from '../../pages/Study';
import Quotes from '../../pages/Quotes';
import Header from '../Header';
import About from '../../pages/About';
import Fees from '../../pages/Fees';
import Converter from '../../pages/Converter';
import Details from '../../pages/Details';

function Tabs(){
  return(
    <Tab.Navigator 
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarLabelStyle:{
            fontSize:10,
            fontFamily: 'Jost-Regular',
            top: -3
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
          component={Home}
          options={{ tabBarBadge: 3 }}
        />
        <Tab.Screen name="Cotações" component={Quotes} />
        <Tab.Screen name="Calculadora" component={Calculator} />
        <Tab.Screen name="Estudo" component={Study} />
        <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  )
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function TabNavbar() {
  return (
    <NavigationContainer>
      <Header></Header>
      <Stack.Navigator initialRouteName="Home" 
      screenOptions={({ route }) => ({
        headerShown: route.name === 'Sobre' 
          || route.name === 'Juros' 
          || route.name === 'Conversor'
          || route.name === 'Detalhes' ? true : false,
        headerStyle: {
          backgroundColor: '#6A5ACD'
        },
        headerTintColor:'white',
        headerTitleStyle:{
          fontFamily:'Jost-Bold'
        }
      })}>
        <Stack.Screen name="Home" component={Tabs} screenOptions={{headerShown: true}}></Stack.Screen>
        <Stack.Screen name="Sobre" component={About}></Stack.Screen>
        <Stack.Screen name="Juros" component={Fees}></Stack.Screen>
        <Stack.Screen name="Conversor" component={Converter}></Stack.Screen>
        <Stack.Screen name="Detalhes" component={Details}></Stack.Screen>
      </Stack.Navigator>
      {/*  */}
    </NavigationContainer>
  );
}