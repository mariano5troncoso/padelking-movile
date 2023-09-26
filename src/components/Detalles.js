import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native';
import Footer from '../views/Footer';

const Detalles = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
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

const styles = StyleSheet.create({
  container: {
  
    minHeight:'100%',
    minWidth:'100%',
    backgroundColor: '#fff',
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
});

export default Detalles;