import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';

const Cart = ({ cartItems, removeFromCart }) => {
  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text>{item.product.name}</Text>
      <Text>Price: ${item.product.price}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <TouchableOpacity onPress={() => handleRemoveItem(item.product._id)}>
        <Text style={styles.removeButton}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.product._id}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps, { removeFromCart })(Cart);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cartItem: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    elevation: 2,
  },
  removeButton: {
    color: 'red',
    marginTop: 8,
  },
});
