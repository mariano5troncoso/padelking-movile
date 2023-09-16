import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useRoute } from '@react-navigation/native';
import productsNox1 from '../components/noxProducts';
import PropTypes from 'deprecated-react-native-prop-types';

const ProductDetails = (props) => {
  const route = useRoute();
  const { productId } = route.params;

  // Buscar el producto por productId
  const product = productsNox1.find((product) => product._id === productId);

  const renderImageItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item }} style={styles.productImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.NavBar}>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.toggleDrawer()}>
          <Image style={styles.LogoMenu} source={require('../../assets/Menu.png')} />
        </TouchableOpacity>
        <Image style={styles.LogoPadel} source={require('../../assets/logo.png')} />
      </View>
      <Carousel
        data={product.cover_photo}
        renderItem={renderImageItem}
        sliderWidth={400}
        itemWidth={400}
      />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
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
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },
  productDescription: {
    fontSize: 16,
    padding: 10,
  },
});

export default ProductDetails;
