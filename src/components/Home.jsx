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
                            navigation.navigate('Jogo', {materia})
                        }}
                    />
                    )
                }
            </ScrollView>
        </View>
    )
}
