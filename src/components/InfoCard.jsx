import { ScrollView, Text, View } from "react-native";
import { styles } from "../style/Style";
import { Form } from "./Form";
import { Anuncio } from "./Anuncio";
import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export function InfoCard({ route }) {
    const {img, titulo, desc, autor, conteudo, ano, mes, dia} = route.params

    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {
                    img !== "" ?
                        <View>
                            <ImageBackground
                                style={{width : '100%', height: 300}}
                                source={{uri : img}}
                            >
                                <LinearGradient
                                    colors={['#00000000', '#2D3946']} 
                                    style={{height : '100%', width : '100%'}}
                                >
                                </LinearGradient>
                            </ImageBackground>
                        </View>
                    :
                        ""
                }

                <View style={{padding: 15}}>
                    <Text style={styles.infoCardTitulo}>{titulo}</Text>
                    <Text style={styles.infoCardDesc}>{desc}</Text>
                    <Text style={styles.infoCardAutor}>{JSON.stringify(dia)}/{JSON.stringify(mes + 1)}/{JSON.stringify(ano)} | por {autor}</Text>
                </View>
                <View style={styles.infoCardMain}>
                    <Text style={styles.infoCardMainText}>
                        {conteudo}
                    </Text>

                    <Form/>
                    <Anuncio/>
                </View>
            </ScrollView>
        </View>
    )
}
