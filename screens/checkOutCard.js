import React from 'react';
import {Node} from 'react';
import {Text, View, Button, Image, ScrollView, StyleSheet} from 'react-native';
import data from './phoneInfo';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart, removeFromCart} from '../app/slices/addCartSlice';
import {checkout} from '../app/slices/checkOutSlice';
const CheckOutCard = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.value);
  const checkOutHistoruy = useSelector(state => state.checkout.history);
  console.log(checkOutHistoruy);
  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        data.map(data => {
          return cartItems.indexOf(data.id) > -1 ? (
            <View style={{width: '50%', marginBottom: 20}} key={data.id}>
              <Image source={data.img} style={{width: 100, height: 200}} />
              <View style={styles.infoContainer}>
                <Text style={styles.name}>{data.name}</Text>
                <View>
                  <Text style={styles.price}>{data.price}$</Text>
                  <View style={{padding: 20}}>
                    <Button
                      style={styles.button}
                      title="Checkout"
                      onPress={() => {
                        dispatch(checkout(data.id));
                        dispatch(removeFromCart(data.id));
                      }}
                    />
                    <Button
                      style={styles.button}
                      title="Remove"
                      onPress={() => {
                        console.log(cartItems);
                        dispatch(removeFromCart(data.id));
                        console.log(cartItems);
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          ) : (
            ''
          );
        })
      ) : (
        <Text style={{fontSize: 50}}>Cart is empty!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 30,
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
});

export default CheckOutCard;
