import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

const CartPage = ({ cartItems, handleRemoveItem, calculateTotal }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <View style={{ flex: 1, alignItems: 'center', paddingTop: 20 }}>
        {/* NavBar y otros elementos que quieras agregar */}
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>Cart Products</Text>
        <View style={{ backgroundColor: 'white', width: '80%', minHeight: '70%', padding: 20, marginTop: 12, borderRadius: 8, borderWidth: 1, borderColor: 'gray' }}>
          {cartItems && Array.isArray(cartItems) && cartItems.length > 0 ? (
            cartItems.map((item) => (
              <View key={item._id} style={{ flexDirection: 'row', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: 'gray' }}>
                <Image
                  source={{ uri: item?.product?.cover_photo[0] }}
                  style={{ width: 80, height: 80, borderRadius: 8 }}
                />
                <View style={{ marginLeft: 12, flex: 1 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text>{item.product.name}</Text>
                    <Text style={{ fontSize: 20 }}>Price ${item.product.price}</Text>
                  </View>
                  <View style={{ marginTop: 6 }}>
                    <Text>Material: {item.product.description.material}</Text>
                    <Text>Condition: {item.product.description.condition}</Text>
                    {/* Agregar más valores de descripción según sea necesario */}
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
                    <Text style={{ fontWeight: 'bold', color: 'black' }}>Qty <Text style={{ fontWeight: 'normal' }}>{item.quantity}</Text></Text>
                    <TouchableOpacity onPress={() => handleRemoveItem(item?.product._id)}>
                      <Text style={{ color: '#ff5757', fontSize: 16 }}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <Text>Your cart is empty</Text>
          )}
          <View style={{ borderTopWidth: 1, borderTopColor: 'gray', marginTop: 12, paddingTop: 12 }}>
            {cartItems && Array.isArray(cartItems) && cartItems.length > 0 && (
              <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ fontSize: 20 }}>Subtotal</Text>
                  <Text style={{ fontSize: 20 }}>${calculateTotal().toFixed(2)}</Text>
                </View>
                <Text style={{ marginTop: 2, fontSize: 20, color: 'gray' }}>Taxes calculated at checkout.</Text>
                {/* Resto de tu código para el botón Checkout y Continuar comprando */}
              </View>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CartPage;