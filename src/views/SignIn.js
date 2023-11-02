import React from 'react';
import { ImageBackground, View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const SignIn = ({ navigation }) => {
  const handleFormSubmit = () => {
    // Mostrar una alerta
    Alert.alert('Inicio exitoso', '¡Bienvenido!', [
      {
        text: 'OK',
        onPress: () => {
          // Redirigir al usuario a otra página, por ejemplo 'SignIn'.
          navigation.navigate('HomeStack');
        },
      },
    ]);
  };
  

  return (
    <ImageBackground
      source={require("../../assets/fondo-inicio.jpg")}
      style={styles.container}
    >
    <View style={styles.container}>
      
      <View style={styles.content}>
        
      </View>
      
      <View style={styles.form}>
      <Text style={styles.title}>
          Welcome!
        </Text>
        <Text style={styles.subtitle}>
        Log in to your account to continue exploring a wide variety of products and make the most of your online shopping experience.
        </Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          
          
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          
          
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity onPress={handleFormSubmit}>
          <LinearGradient colors={['#525558', '#394651']} style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGoogle}>
          <Image source={require('../../assets/Google.png')} style={styles.iconGoogle} />
          <Text style={styles.buttonTextGoogle}>Sign in with Google</Text>
        </TouchableOpacity>
        <Text style={styles.textEnd}>
          You don't have an account yet? <Text style={styles.destacar}>Sign Up</Text>
        </Text>
        <Text style={styles.textEnd}>Go back to <Text style={styles.destacar}>home page</Text></Text>
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  content: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    
  },
  destacar: {
    color: 'red',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    margin: 2,
    color: '#1F1F1F',
    marginBottom:100
  },
  form: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    borderRadius: 10,
    margin: 16,
    padding: 20,
  },
  label: {
    color: '#808080',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  input: {
    borderBottomWidth: 2,
    borderColor: '#808080',
    fontSize: 16,
    color: '#000',
    paddingVertical: 6,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#808080',
    paddingVertical: 12,
    marginTop: 8,
  },
  iconGoogle: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 8,
  },
  buttonTextGoogle: {
    color: '#808080',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textEnd: {
    textAlign: 'center',
    fontSize: 14,
    color: '#808080',
    marginTop: 16,
  },
});

export default SignIn;
