import { ScrollView, View } from 'react-native'
import { styles } from '../style/Style' 
import { Card } from './Card' 
import { materias } from '../context/Materias' 

export function Home({ navigation }) {
    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {
                    materias.map((materia, index) => 
                    <Card
                        materia={materia}
                        index={index}
                        key={index}
                        navigation={navigation}
                        onPress={() => {
                            navigation.navigate('Jogo', {
                                img: materia.img,
                                titulo: materia.titulo,
                                desc: materia.desc,
                                autor: materia.autor,
                                conteudo: materia.conteudo,
                                ano: materia.dataPubli.getFullYear(),
                                mes: materia.dataPubli.getMonth(),
                                dia: materia.dataPubli.getDate()
                            })
                        }}
                    />
                    )
                }
            </ScrollView>
        </View>
    )
}
