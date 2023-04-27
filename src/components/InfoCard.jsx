import { ScrollView, Text, View } from "react-native";
import { styles } from "../style/Style";

export function InfoCard({ route }) {
    const {materia} = route.params;

    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={{fontSize: 30, fontWeight: "bold", textAlign: "center", width: "90%", margin: "auto", marginTop: 15, marginBottom: 15}}>{materia.titulo}</Text>
                <Text style={{fontSize: 20, textAlign: "center", width: "90%", margin: "auto", marginTop: 15, marginBottom: 15}}>{materia.desc}</Text>
                <Text style={{fontSize: 15, textAlign: "right"}}>{materia.dataPubli.getDate()}/{materia.dataPubli.getMonth() + 1}/{materia.dataPubli.getFullYear()} | por {materia.autor}</Text>
            </ScrollView>
        </View>
    )
}
