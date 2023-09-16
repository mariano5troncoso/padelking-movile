import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text>MEDIOS DE PAGO</Text>
      <View style={styles.pagos}>
        <Image source={require('../../assets/mercadopago.png')} style={styles.icon} />
        <Image source={require('../../assets/american-express.png')} style={styles.icon} />
        <Image source={require('../../assets/cabal.png')} style={styles.icon} />
        <Image source={require('../../assets/diners-club.png')} style={styles.icon} />
        <Image source={require('../../assets/maestro.png')} style={styles.icon} />
        <Image source={require('../../assets/naranja.png')} style={styles.icon} />
        <Image source={require('../../assets/nativa.png')} style={styles.icon} />
        <Image source={require('../../assets/pagofacil.png')} style={styles.icon} />
        <Image source={require('../../assets/rapipago.png')} style={styles.icon} />
        <Image source={require('../../assets/visa.png')} style={styles.icon} />
      </View>
      <Text>MEDIOS DE ENVÍO</Text>
      <Image source={require('../../assets/correo-argentino.png')} style={styles.icon} />
      <Text>NUESTRAS REDES SOCIALES</Text>
      <Image source={require('../../assets/instagram.png')} style={styles.icon} />
      <Text>CONTACTO</Text>
      <Text>Número de teléfono: +123456789</Text>
      <Text>Correo electrónico: ejemplo@email.com</Text>
      <Text>Ubicación: Dirección de ejemplo, Ciudad</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'alice',
    padding: 10,
    alignItems: 'end',
    width: '100%',
  },
  pagos: {
    flexDirection: 'row', // Para alinear las imágenes en una fila
    flexWrap: 'wrap', // Para que las imágenes se envuelvan si no caben en la pantalla
  },
  icon: {
    width: 60, // Define el ancho de las imágenes
    height: 60, // Define la altura de las imágenes
    margin: 5, // Agrega margen entre las imágenes
    objectFit: 'contain'
  },
});

export default Footer;

