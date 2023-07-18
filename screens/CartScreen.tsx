import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {cartItems} from '../constants';
import FruitCardCart from '../components/FruitCardCart';
import {themeColors} from '../theme';
export default function CartScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.textsContainer}>
        <Text style={styles.yourText}> Your</Text>
        <Text style={styles.cartText}> cart</Text>
      </View>

      <View style={{padding: 10}}>
        {cartItems.map((fruit, index) => {
          return <FruitCardCart fruit={fruit} key={index} />;
        })}
      </View>

      <View style={styles.totalPriceContainer}>
        <Text style={styles.totalText}>Total Price :</Text>
        <Text style={styles.totalTextPrice}>$ 120</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.paymentText}>Payment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.primaryColor,
  },
  totalPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    right: 20,
  },
  totalText: {
    fontSize: 17,
    fontWeight: '600',
  },
  totalTextPrice: {
    fontSize: 17,
    fontWeight: '600',
    color: 'orange',
  },
  paymentText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
  },
  textsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  cartText: {fontWeight: 'bold', fontSize: 20},
  yourText: {fontSize: 20},
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'orange',
    opacity: 0.8,
    shadowColor: 'orange',
    shadowRadius: 25,
    shadowOffset: {width: 0, height: 15},
    shadowOpacity: 0.4,
    height: 60,
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
