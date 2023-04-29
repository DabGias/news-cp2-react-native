import React from 'react'
import { NavigationContainer } from '@react-navigation/native' 
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from './src/components/Home'
import { InfoCard } from './src/components/InfoCard'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2D3946',
          },
          headerTintColor: '#fff',
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name='Jogos'
          component={Home}
        />
        <Stack.Screen
          name='Jogo'
          component={InfoCard}
          options={
            ({ route }) => ({ title: route.params.titulo, headerTitleStyle: { fontSize: 12 }, headerTitleAlign: "left" })
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
