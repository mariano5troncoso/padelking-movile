import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import productsSiux1 from '../components/siuxProducts';
import { useNavigation } from '@react-navigation/native';

const Siux = () => {
  const navigation = useNavigation();

  const handleProductDetailsPress = (productId) => {
    navigation.navigate('Detalles Siux', { productId });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.NavBar}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.toggleDrawer()}>
            <Image style={styles.LogoMenu} source={require('../../assets/Menu.png')} />
          </TouchableOpacity>
          <Image style={styles.LogoPadel} source={require('../../assets/logo.png')} />
        </View>
        {productsSiux1.map((product) => (
          <TouchableOpacity
            key={product._id}
            style={styles.productCard}
            onPress={() => handleProductDetailsPress(product._id)}
          >
            <Image
              source={{ uri: product.cover_photo[0] }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>Price: ${product.price}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'rgb(92,110,141)',
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
  productCard: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 6,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  productName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    marginTop: 5,
    fontSize: 14,
    color: 'gray',
  },
});

export default Siux;