import React from 'react'
import { StackRoute } from './src/routes/StackRoute'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { materiasJogos, materiasEsportes } from './src/context/Materias'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
              backgroundColor: '#2D3946',
          },
          headerTintColor: '#fff',
          headerTitleAlign: "center"
        }}
      >
        <Drawer.Screen name='Jogos'>
          {() => <StackRoute materias={materiasJogos} name={"Jogos"}/>}
        </Drawer.Screen>
        <Drawer.Screen name='Esportes'>
          {() => <StackRoute materias={materiasEsportes} name={"Esportes"}/>}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
