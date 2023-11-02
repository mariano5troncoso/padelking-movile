import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';

const CartPage = ({ cartItems, removeFromCart }) => {
  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const calculateTotal = () => {
    let total = 0;
    for (const item of cartItems) {
      if (item.product && item.product.price) {
        total += item.product.price * item.quantity;
      }
    }
    return total;
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <View style={{ flex: 1, alignItems: 'center', paddingTop: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>Cart Products</Text>
        <View style={{ backgroundColor: 'white', width: '80%', minHeight: '70%', padding: 20, marginTop: 12, borderRadius: 8, borderWidth: 1, borderColor: 'gray' }}>
          {cartItems && Array.isArray(cartItems) && cartItems.length > 0 ? (
            cartItems.map((item) => (
              item && item._id && ( // Verificar si item es válido y tiene _id
                <View key={item._id} style={{ flexDirection: 'row', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: 'gray' }}>
                  <Image
                    source={{ uri: item?.product?.cover_photo[0] }}
                    style={{ width: 80, height: 80, borderRadius: 8 }}
                  />
                  <View style={{ flex: 1 }}>
                    {item.product && <Text>{item.product.name}</Text>}
                    {item.product && <Text>Price: ${item.product.price}</Text>}
                    <Text>Quantity: {item.quantity}</Text>
                    <TouchableOpacity onPress={() => item.product && handleRemoveItem(item.product._id)}>
                      <Text style={{ color: '#ff5757', fontSize: 16 }}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )
            ))
          ) : (
            <Text>Your cart is empty</Text>
          )}
          <Text style={{ fontSize: 20 }}>Subtotal: ${calculateTotal().toFixed(2)}</Text>
          <Text style={{ marginTop: 2, fontSize: 20, color: 'gray' }}>Taxes calculated at checkout.</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps, { removeFromCart })(CartPage);