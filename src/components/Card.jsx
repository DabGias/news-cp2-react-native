import React from "react"
import { Image, Pressable, Text, View } from "react-native"
import { styles } from "../style/Style"

export function Card({ materia, index }) {
    return(
        <View style={styles.card} key={index}>
                <View>
                    {
                        materia.img !== "" ?
                            <Image style={{width: 50, height: 50}} source={{uri: materia.img}}/>
                        :
                            ""
                    }
                </View>
                <View style={{width: "100%"}}>
                    <Text>Título: {materia.titulo}</Text>
                    <Text>Descrição: {materia.desc}</Text>
                    <Text>Data: {materia.dataPubli.getDate()}/{materia.dataPubli.getMonth()}/{materia.dataPubli.getFullYear()}</Text>
                    <Text>Autor: {materia.autor}</Text>
                </View>
        </View>
    )
}