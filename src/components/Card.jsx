import React from "react"
import { ImageBackground, Pressable, Text, View } from "react-native"
import { styles } from "../style/Style"

export function Card({ materia, index, onPress}) {
    return(
        <Pressable style={styles.card} key={index} onPress={onPress}>
            {
                materia.img !== "" ?
                    <View style={styles.viewCardImg}>
                                <ImageBackground style={styles.cardImg} source={{uri: materia.img}}/>
                    </View>
                :
                    ""
            }
                <View style={
                    materia.img !== "" ? 
                        {display: "flex", justifyContent: "space-between", width: "70%", padding: 15} 
                    : 
                        {display: "flex", justifyContent: "space-between", width: "100%", padding: 15}
                    }
                >
                    <Text style={{width: "100%", fontWeight: "bold", color: "#dddddd"}}>{materia.titulo}</Text>
                    <Text style={{width: "100%", marginTop: 15, marginBottom: 15, color: "#dddddd"}}>{materia.desc}</Text>
                    <Text style={{width: "100%", textAlign: "right", color: "#dddddd"}}>{materia.dataPubli.getDate()}/{materia.dataPubli.getMonth() + 1}/{materia.dataPubli.getFullYear()} | {materia.autor}</Text>
                </View>
        </Pressable>
    )
}