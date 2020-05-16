import React ,{ useState, useRef } from 'react';
import { View ,  
  ScrollView, 
  Text, 
  StyleSheet, 
  Dimensions,
  ImageBackground, 
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import Icon from "react-native-vector-icons/MaterialIcons";
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth, height: screenHeigth } = Dimensions.get("window");

export default function App() {

  const [lista, setLista] = useState([
    {
        title:"O Justiceiro",
        text: "Após o assassinato de sua família, Frank Castle está traumatizado e sendo caçado. No submundo do crime, ele se tornará aquele conhecido como O Justiceiro",
        release: 2018,
        img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/background.jpg'
    },
    {
        title:"Bad Boys for life",
        text: "Terceiro episódio das histórias dos policiais Burnett (Martin Lawrence) e Lowrey (Will Smith), que devem encontrar e prender os mais perigosos traficantes de drogas da cidade.",
        release: 2020,
        img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/badboy.jpg'
    },
    {
        title:"Viúva Negra",
        text: "Em Viúva Negra, após seu nascimento, Natasha Romanoff (Scarlett Johansson) é dada à KGB, que a prepara para se tornar sua agente definitiva.",
        release: 2020,
        img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blackwidow.jpg'
    },
    {
        title:"Top Gun: MAVERICK",
        text: "Em Top Gun: Maverick, depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, o piloto à moda antiga Maverick (Tom Cruise) enfrenta drones e prova que o fator humano ainda é fundamental no mundo contemporâneo das guerras tecnológicas.",
        release: 2020,
        img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/topgun.jpeg'
    },
    {
        title:"BloodShot",
        text: "Bloodshot é um ex-soldado com poderes especiais: o de regeneração e a capacidade de se metamorfosear. ",
        release: 2020,
        img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blood.jpg'
    },
    {
        title:"Free Guy",
        text: "Um caixa de banco preso a uma entediante rotina tem sua vida virada de cabeça para baixo quando ele descobre que é personagem em um brutalmente realista vídeo game de mundo aberto.",
        release: 2020,
        img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/freeguy.jpg'
    },
  ]);

  const [backgroundUri, setBackgroundUri] = useState(lista[0].img)
  const {height} = Dimensions.get("window");
  const carrosselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0)

  const _renderItenView = ({ item, index }) => {
    return(
      <View>
        <TouchableOpacity>
          <Image 
            source={{ uri: item.img }}
            style={styles.carouselImage}
          />
          <Text style={styles.carouselTextDesc }> { item.title } </Text>

          <Icon name="play-circle-outline" size={30} color="#fff" style={styles.carouselIcon} />
        </TouchableOpacity>
      </View>
    )
  };

 return (
    <ScrollView style={styles.container}>
      <View style={styles.viewPaiViewCenter}>
        <View style={styles.viewCenter}>
          <ImageBackground
            source={{uri: backgroundUri }}
            style={styles.imageBackgroundImg}
            blurRadius={5}
          >
            <View style={styles.viewTextInputSearch}>
              <TextInput
                style={styles.textInputSearch}
                placeholder="Digite o que procura"
              />
              <TouchableOpacity style={styles.touchableOpacityIcon}>
                <Icon name="search" style={styles.iconSearch} size={30} />
              </TouchableOpacity>
            </View>

            <Text style={styles.textAcabouChegar}>
              Acabou de chegar
            </Text>

            <View style={styles.viewCarouselSlide}>
              <Carousel 
                style={styles.carouselSlide}
                ref={carrosselRef}
                data={lista}
                renderItem={_renderItenView}
                sliderWidth={ screenWidth }
                itemWidth= { 220 }
                inactiveSlideOpacity= { 0.5 }
                onSnapToItem={ ( index ) => {
                  setBackgroundUri(lista[index].img)
                  setActiveIndex(index)
                }}
              />
            </View>

            <View style={styles.maisInfoFilme}>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.textFilmeTitle}>
                  { lista[activeIndex].title}                 
                </Text>
                <Text style={styles.textFilmeDesc}>
                { lista[activeIndex].text}
                </Text>
              </View>

              <TouchableOpacity  style={{ marginTop: 20, marginRight: 20}}>
                <Icon name="queue" size={25} color="#fff" />
              </TouchableOpacity>
              
            </View>

          </ImageBackground>
          
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container:{
    flex: 1
  },
  viewPaiViewCenter:{
    flex: 1,
    height: screenHeigth
  },
  viewCenter:{
    backgroundColor:"#000",
    ...StyleSheet.absoluteFill,
  },
  imageBackgroundImg:{
    flex: 1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: "flex-start",
    backgroundColor: "#000",    
  },
  viewTextInputSearch: {
    marginTop: 35,
    backgroundColor: "#fff",
    elevation: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: "95%",
    flexDirection: "row",
    alignSelf: "center"
  },
  textInputSearch:{
    width: "95%",
    padding: 13,
    paddingLeft: 10,
    fontSize: 18
  },
  touchableOpacityIcon:{
    position: "absolute",
    right: 10,
    top: 10
  },
  iconSearch:{
    color: "#000",    
  },
  textAcabouChegar:{
    fontSize:25,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
    marginVertical: 10
  },
  viewCarouselSlide:{
    width: "100%",
    height: 420,
    justifyContent: "center",
    alignItems: "center"
  },
  carouselSlide:{
    flex: 1,
    overflow: "visible"
  },
  carouselImage:{
    alignItems: "center",
    width: 220,
    height: 350,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  carouselTextDesc:{
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    padding: 20,
    position: "absolute",
    bottom: 10,
    left: 5
  },
  carouselIcon:{
    position: "absolute",
    top: 10,
    right: 10
  },
  maisInfoFilme:{
    backgroundColor: "#fff",
    width: screenWidth,
    height: screenHeigth,
    borderRadius: 5,
    marginVertical: 20,
    flexDirection: "row",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginTop: 10,
    justifyContent: "space-around"
  },
  textFilmeTitle:{ 
    paddingTop: 5,
    paddingLeft: 20,  
    
    fontSize: 20,
    fontWeight: 'bold',
    color: "#131313",
    marginBottom: 5,
  },
  textFilmeDesc:{
    paddingLeft: 20,
    paddingTop: 5,
    color: "#131313",
    fontSize: 15,
    fontWeight: "bold"
  }

});