import React from 'react';
import {Node} from 'react';
import {Text, View, Button, Image, ScrollView, StyleSheet} from 'react-native';
import data from './phoneInfo';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart, removeFromCart} from '../app/slices/addCartSlice';
import {checkout} from '../app/slices/checkOutSlice';

const Profile = () => {
  let checkOutAmount = () => {
    const checkOutHistory = useSelector(state => state.checkout.history);
    let amount = 0;
    for (i = 0; checkOutHistory.length() > i; i++) {
      for (j = 0; data.length() > j; j++) {
        if (checkOutHistory[i] == data[j].id) {
          amount += data[j].price;
        }
      }
    }
    console.log('amount' + amount);
    return (
      <View>
        <Text>{amount}</Text>
      </View>
    );
  };

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.value);
  const checkOutHistory = useSelector(state => state.checkout.history);
  console.log(checkOutHistory);
  return (
    <ScrollView style={{alignContent: 'center', alignSelf: 'center'}}>
      <View style={styles.container}>
        {checkOutHistory.length > 0 ? (
          data.map(data => {
            return checkOutHistory.indexOf(data.id) > -1 ? (
              <View style={{width: '50%', marginBottom: 20}} key={data.id}>
                <Image source={data.img} style={{width: 100, height: 200}} />
                <View style={styles.infoContainer}>
                  <Text style={styles.name}>{data.name}</Text>
                  <View>
                    <Text style={styles.price}>{data.price}$</Text>
                  </View>
                </View>
              </View>
            ) : (
              ''
            );
          })
        ) : (
          <Text style={{fontSize: 50}}>No checkouts yet!</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    alignSelf: 'center',
  },
  name: {
    fontSize: 30,

    color: 'black',
  },
  price: {
    fontSize: 30,
    color: 'green',
    marginRight: 20,
  },
  infoContainer: {},
  button: {
    elevation: 8,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 0,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Profile;
