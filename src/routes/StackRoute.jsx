import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../components/Home";
import { InfoCard } from "../components/InfoCard";

const Stack = createNativeStackNavigator()

export function StackRoute({ materias, name }) {
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#2D3946',
                    },
                    headerTintColor: '#fff',
                    headerTitleAlign: "center"
                }}
            >
                <Stack.Screen name={name} options={{ headerShown: false }}>
                    {(props) => <Home materias={materias} navigation={props.navigation}/>}
                </Stack.Screen>
                <Stack.Screen
                    name='Info'
                    component={InfoCard}
                    options={
                        ({ route }) => ({ title: route.params.titulo, headerTitleStyle: { fontSize: 12 }, headerTitleAlign: "left" })
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}