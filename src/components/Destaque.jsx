import { View } from "react-native";
import { Pressable } from "react-native";
import { styles } from "../style/Style";
import { Text } from "react-native";
import { ImageBackground } from "react-native";

export function Destaque({ destaque, onPress }) {
    return(
        <Pressable style={styles.cardDestaque} onPress={onPress}>
            <View style={styles.viewDestaqueImg}>
                <ImageBackground style={styles.cardImg} source={{uri: destaque.img}} />
            </View>

            <View style={{display: "flex", justifyContent: "space-between", padding: 15}}>
                <Text style={{fontWeight: "bold", color: "#dddddd"}}>{destaque.titulo}</Text>
                <Text style={{marginTop: 15, marginBottom: 15, color: "#dddddd"}}>{destaque.desc}</Text>
                <Text style={{textAlign: "right", color: "#dddddd"}}>{destaque.dia}/{destaque.mes + 1}/{destaque.ano} | {destaque.autor}</Text>
            </View>
        </Pressable>
    )
}
