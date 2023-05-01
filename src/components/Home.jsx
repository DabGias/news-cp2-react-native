import { ScrollView, View } from 'react-native'
import { styles } from '../style/Style' 
import { Card } from './Card' 
import { materias } from '../context/Materias' 
import { useEffect, useState } from 'react'
import { Destaque } from './Destaque'
import { Anuncio } from './Anuncio'

export function Home({ navigation }) {
    const [destaque, setDestaque] = useState({})
    const BreakError = {}

    useEffect(() => {
        try {
            materias.map((materia) => {
                if (materia.img !== "") {
                    var dados = Object.assign({}, destaque)
    
                    dados.img = materia.img
                    dados.titulo = materia.titulo
                    dados.desc = materia.desc
                    dados.autor = materia.autor
                    dados.dia = materia.dataPubli.getDate()
                    dados.mes = materia.dataPubli.getMonth()
                    dados.ano = materia.dataPubli.getFullYear()
                    dados.conteudo = materia.conteudo
    
                    setDestaque(dados)

                    throw BreakError
                }
            })
        } catch (err) {
            if (err !== BreakError) throw err
        }
    }, [])

    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {
                    destaque ?
                        <Destaque
                            destaque={destaque}
                            onPress={() => {
                                navigation.navigate('Jogo', {
                                    img: destaque.img,
                                    titulo: destaque.titulo,
                                    desc: destaque.desc,
                                    autor: destaque.autor,
                                    conteudo: destaque.conteudo,
                                    ano: destaque.ano,
                                    mes: destaque.mes,
                                    dia: destaque.dia
                                })
                            }}
                        />
                    :
                        <Anuncio/>
                }

                {
                    materias.filter((m) => m.titulo !== destaque.titulo).map((materia, index) => 
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
