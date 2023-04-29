import { Image, View } from "react-native";
import { styles } from "../style/Style";

export function Anuncio() {
    return(
        <View style={styles.viewAd}>
            <Image style={styles.imgAd} source={require("../assets/fiap.png")}/>
        </View>
    )
}
