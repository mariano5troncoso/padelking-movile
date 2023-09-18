import React from 'react';
import { StatusBar, Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Footer from './Footer';

const Home = (props) => {
  const bannerData = [
    {
      image: require('../../assets/BannerBull.jpg'),
      title: '¡Bienvenidos a PADELKING!',
    },
    {
      image: require('../../assets/BannerNox.jpg'),
      title: '¡Descubre nuestras mejores marcas!',
    },
    {
      image: require('../../assets/BannerSiux.jpg'),
      title: '¡Al mejor precio del mercado!',
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.NavBar}>
          <TouchableOpacity style={styles.button} onPress={() => props.navigation.toggleDrawer()}>
            <Image style={styles.LogoMenu} source={require('../../assets/Menu.png')} />
          </TouchableOpacity>
          <Image style={styles.LogoPadel} source={require('../../assets/logo.png')} />
        </View>
        <View style={styles.bannerContainer}>
          <Swiper style={styles.carouselContainer} autoplay={true}>
            {bannerData.map((item, index) => (
              <View key={index} style={styles.bannerItem}>
                <Image source={item.image} style={styles.bannerImage} />
                <Text style={styles.bannerTitle}>{item.title}</Text>
              </View>
            ))}
          </Swiper>
        </View>
        <View>
          <Text style={styles.title1}>El arte del pádel, a tu alcance</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Image source={require('../../assets/CategoryBull.jpg')} style={styles.buttonImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Nox')}>
            <Image source={require('../../assets/CategoryNox.jpg')} style={styles.buttonImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={require('../../assets/CategorySiux.jpg')} style={styles.buttonImage} />
          </TouchableOpacity>
        </View>
        <Footer />
        <StatusBar hidden={true} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LogoPadel: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  LogoMenu: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  NavBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bannerContainer: {
    width: '100%',
    height: 250,
  },
  contentContainer: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    minWidth: '100%',
  },
  bannerItem: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  title1: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage: {
    width: 300,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 20,
    marginTop: 10,
  },
  
});

export default Home;
