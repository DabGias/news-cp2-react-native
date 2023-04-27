import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { styles } from './src/style/Style'
import { Card } from './src/components/Card'

export default function App() {
  const materias = [
    {
      img: "",
      titulo: "PS Plus de maio tem Grid Legends, Chivalry 2 e mais jogos grátis",
      desc: "Serviço por assinatura da PlayStation receberá diversos títulos novos no mês de maio, como Chivalry 2, Descenders e o jogo de corrida Grid Legends; veja mais detalhes sobre",
      dataPubli: new Date(2023, 3, 26),
      autor: "Rafael Monteiro"
    },
    {
      img: "https://s2.glbimg.com/183cH0C8EvuV6HZSGh1ymzGLWCs=/0x0:1462x910/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/x/F/lJnUVtRiGhxnSSlptCEw/sukurinshiyotsuto-20221206-104130.png",
      titulo: "Review Star Wars Jedi Survivor: jogo foca no enredo com mudanças pontuais",
      desc: "Novo jogo do universo de Star Wars é sequência de título lançado em 2019 e estará disponível para PlayStation 5 (PS5), Xbox Series S, Xbox Series X e PC; veja a review",
      dataPubli: new Date(2023, 3, 26),
      autor: "Letícia Rosa"
    },
    {
      img: "",
      titulo: "Honkai Star Rail: veja gameplay, requisitos e tier list dos personagens",
      desc: "Conheça tudo sobre Honkai: Star Rail, novo RPG gratuito do estúdio chinês HoYoverse, ex-miHoYo, conhecido pelo game de sucesso Genshin Impact",
      dataPubli: new Date(2023, 3, 26),
      autor: "Rafael Monteiro"
    },
    {
      img: "https://s2.glbimg.com/GCKHXzx-LD-H7AswwgWtpnbQJJo=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/2/p/xxv4W2SLOFmpxDX3Y5Zg/asus-rog-ally-rival-steam-deck-portatil-windows-game.jpg",
      titulo: "ROG Ally: veja novidades, lançamento e jogos do novo console portátil",
      desc: "Console da Asus terá Windows 11 e promete potência de sobra para bater o Steam Deck, da Valve; saiba tudo sobre o modelo",
      dataPubli: new Date(2023, 3, 25),
      autor: "Rafael Monteiro"
    },
    {
      img: "",
      titulo: "Como fazer drift no Forza Horizon 5, jogo de corrida do Xbox",
      desc: "Drift é uma das manobras mais básicas e também mais importantes do título exclusivo do console da Microsoft; veja o passo a passo completo para executá-la com perfeição",
      dataPubli: new Date(2023, 3, 24),
      autor: "Felipe Vinha"
    },
    {
      img: "https://s2.glbimg.com/yLs87t5NpXHY4SK5A5_xnoE-0kY=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/a/q/7WSNBRRGOcy3yhtSRzYw/vitality-dupreeh.jfif",
      titulo: "CS:GO: Vitality vence a Heroic e conquista o título da IEM Rio 2023",
      desc: "Após o IEM Rio Major 2022, Heroic voltou a amargar um vice-campeonato na Jeunesse Arena. TechTudo traz todas as movimentações da partida. Campeonato movimentou cerca de R$ 1,25 milhão.",
      dataPubli: new Date(2023, 3, 23),
      autor: "Victor de Abreu"
    },
    {
      img: "https://s2.glbimg.com/rX9qnMZF01jl2RobpVb0BioIjh0=/73x102:2048x1180/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/0/6/7Aa2xcTRO3BFQJlpcwuA/ftmpkelaqaaxbur.jpg",
      titulo: "IEM Rio 2023: Time Mundo supera Time Brasil em showmatch no CS2",
      desc: "Estrangeiros venceram os brasileiros em showmatch recheado de jogadas curiosas e escolhas peculiares de armas. TechTudo traz o resumão da partida.",
      dataPubli: new Date(2023, 3, 23),
      autor: "Victor de Abreu"
    },
    {
      img: "https://s2.glbimg.com/Iy7LjC6CjJ31YX7VOUm2-a6aZro=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/w/K/BMM1BTQRedpe3S0wolEQ/brotato-sobrevivencia-rogue-bullet-hell-vampire-survivors-steam-android-iphone-ios.jpg",
      titulo: "Conheça Brotato, jogo 'estilo' Vampire Survivors para PC e celular",
      desc: "Neste game de tiro e sobrevivência da Blobfish, é necessário enfrentar hordas de alienígenas como uma batata que manuseia armas pesadas; veja mais informações sobre",
      dataPubli: new Date(2023, 3, 22),
      autor: "Rafael Monteiro"
    },
    {
      img: "https://cdn.akamai.steamstatic.com/steam/apps/632360/header.jpg?t=1660063598",
      titulo: "Risk of Rain 2: guia para baixar e como jogar o game indie",
      desc: "Sequência do aclamado game indie chega na Steam em acesso antecipado com ação frenética e partidas multiplayer online. Confira o guia pra começar a jogar como os outros 30 mil jogadores.",
      dataPubli: new Date(2019, 3, 4),
      autor: "Rafael Monteiro"
    },
    {
      img: "https://s2.glbimg.com/B9fqnDNzvY5j8UmR9hgrG_mQKDc=/0x0:695x434/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/b/7/jnCMZkRB2N38UQVDj85g/2014-01-03-metal-gear-rising-pc.jpg",
      titulo: "Metal Gear Rising no PC é o destaque nos lançamentos da semana",
      desc: "Além dele do game da Konami, outros jogos chegam ao PlayStation 4 e Nintendo 3DS em semana fraca de lançamentos",
      dataPubli: new Date(2014, 0, 6),
      autor: "John Doe"
    }
  ]

  return (
    <View style={styles.container}>
      <ScrollView style={{display: "flex", flexDirection: "column", flexWrap: "wrap", alignContent: "center"}}>
          {
            materias.map((materia, index) => 
              <Card
                materia={materia}
                index={index}
                key={index}
              />
            )
          }
      </ScrollView>
    </View>
  )
}
