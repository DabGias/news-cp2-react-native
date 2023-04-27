import React from "react"
import { ImageBackground, Pressable, Text, View } from "react-native"
import { styles } from "../style/Style"

export function Card({ materia, index, onPress}) {
    return(
        <Pressable style={styles.card} key={index} onPress={onPress}>
            {
                materia.img !== "" ?
                    <View style={styles.viewCardImg}>
                                <ImageBackground resizeMode="cover" style={styles.cardImg} source={{uri: materia.img}}/>
                    </View>
                :
                    ""
            }
                <View style={materia.img !== "" ? {width: "70%", padding: 15} : {width: "100%", padding: 15}}>
                    <Text style={{width: "100%", fontWeight: "bold"}}>{materia.titulo}</Text>
                    <Text style={{width: "100%", marginTop: 15, marginBottom: 15}}>{materia.desc}</Text>
                    <Text style={{width: "100%", textAlign: "right"}}>{materia.dataPubli.getDate()}/{materia.dataPubli.getMonth() + 1}/{materia.dataPubli.getFullYear()} | {materia.autor}</Text>
                </View>
        </Pressable>
    )
}