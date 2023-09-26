import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Detalles from '../components/Detalles';
import productsNox1 from '../components/noxProducts';

const ProductDetailsScreen2 = ({ route, navigation }) => {
  const { productId } = route.params;
  // Encuentra el producto correspondiente según el productId
  const product = productsNox1.find((p) => p._id === productId);

  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.NavBar}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.toggleDrawer()}>
            <Image style={styles.LogoMenu} source={require('../../assets/Menu.png')} />
          </TouchableOpacity>
          <Image style={styles.LogoPadel} source={require('../../assets/logo.png')} />
        </View>
        <Detalles product={product} />
      </View>
    </ScrollView>
  );
};

export default ProductDetailsScreen2;

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
});
