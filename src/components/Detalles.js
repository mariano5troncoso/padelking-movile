import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native';
import Footer from '../views/Footer';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions'; // Importa la acción addToCart

const Detalles = ({ product, addToCart }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleAddToCart = () => {
    // Llama a la acción addToCart para agregar el producto al carrito
    addToCart(product);

    // Muestra un mensaje de éxito o realiza otras acciones necesarias
    alert(`"${product.name}" ha sido agregado al carrito.`);
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          {product.cover_photo.map((image, index) => (
            <TouchableOpacity key={index} onPress={() => openImageModal(image)}>
              <Image
                source={{ uri: image }}
                style={styles.productImage}
              />
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.productPrice}>Price: ${product.price}</Text>
        <Text style={styles.productStock}>Stock: {product.stock} available</Text>
      </View>

      {/* Botón para agregar al carrito */}
      <TouchableOpacity onPress={handleAddToCart}>
        <View style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Agregar al Carrito</Text>
        </View>
      </TouchableOpacity>

      {/* Modal for displaying the selected image */}
      <Modal
        visible={selectedImage !== null}
        transparent={true}
        onRequestClose={closeImageModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={closeImageModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <Image
            source={{ uri: selectedImage }}
            style={styles.selectedImage}
          />
        </View>
      </Modal>
      <Footer/>
    </ScrollView>
  );
};

// Mapea las acciones y el estado del carrito al componente
const mapStateToProps = (state) => {
  return {
    cart: state.cart, // Asegúrate de que esto coincida con el nombre de tu reducer del carrito
  };
};

export default connect(mapStateToProps, { addToCart })(Detalles);

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    minWidth: '100%',
    backgroundColor: '#fff',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  },
  productDescription: {
    fontSize: 16,
    marginTop: 10,
    color: 'black',
  },
  productPrice: {
    fontSize: 18,
    marginTop: 10,
    color: 'black',
  },
  productStock: {
    fontSize: 16,
    marginTop: 10,
    color: 'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  selectedImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  addToCartButton: {
    backgroundColor: '#ff5757',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  addToCartText: {
    color: 'white',
    fontSize: 18,
  },
});