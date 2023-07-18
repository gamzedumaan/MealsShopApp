import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import StarRating from 'react-native-star-rating';

import {useNavigation} from '@react-navigation/native';
export default function ProductScreen(props) {
  console.log(props.route.params);
  let fruit = props.route.params;
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: fruit.color}}>
      <SafeAreaView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            shadowColor: fruit.shadow,
            shadowRadius: 50,
            shadowOffset: {width: 0, height: 50},
            shadowOpacity: 0.7,
          }}>
          <Image source={fruit.image} style={styles.image} />
        </View>
      </SafeAreaView>
      <View style={styles.bottomSheet}>
        <View style={{marginTop: 20, marginLeft: 15}}>
          <Text style={styles.nameText}>{fruit.name}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.descText}>{fruit.desc}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.soldText}>sold</Text>
              <Text style={styles.numberText}>239</Text>
            </View>
          </View>
        </View>

        <StarRating
          disabled={false}
          maxStars={5}
          starSize={17}
          rating={fruit.stars}
          emptyStarColor="lightgray"
          fullStarColor="gold"
        />
        <Text style={styles.text}>
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Text>
        <View style={styles.buttonContainer}>
          <Text style={styles.priceText}>$ {fruit.price}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('CartScreen')}
            style={{
              backgroundColor: fruit.shadow,
              opacity: 0.6,
              shadowColor: fruit.shadow,
              shadowRadius: 25,
              shadowOffset: {width: 0, height: 15},
              shadowOpacity: 0.5,
              alignItems: 'center',
              height: 70,
              width: '70%',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text style={styles.addToText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 290,
    width: 290,
  },
  addToText: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 28,
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 25,
    opacity: 0.6,
  },
  descText: {
    fontWeight: '500',
    fontSize: 16,
    opacity: 0.7,
  },
  soldText: {fontSize: 16, right: 15},
  numberText: {fontWeight: 'bold', fontSize: 16, right: 10},
  text: {
    textAlign: 'justify',
    margin: 5,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  priceText: {
    fontSize: 28,
    fontWeight: '400',
  },
  bottomSheet: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
});
