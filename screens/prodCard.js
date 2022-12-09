import React from 'react';
import {Node} from 'react';
import {Text, View, Button, Image, ScrollView, StyleSheet} from 'react-native';
import data from './phoneInfo';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart, removeFromCart} from '../app/slices/addCartSlice';

const ProdCard = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.value);

  return (
    <View style={styles.container}>
      {data.map(data => {
        return (
          <View style={{width: '50%', marginBottom: 20}}>
            <Image source={data.img} style={{width: 100, height: 200}} />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{data.name}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.price}>{data.price}$</Text>
                {cartItems.indexOf(data.id) > -1 ? (
                  <Text>Item Added</Text>
                ) : (
                  <Button
                    title="Add"
                    onPress={() => {
                      dispatch(addToCart(data.id));
                    }}
                  />
                )}
              </View>
            </View>
          </View>
        );
      })}
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
});

export default ProdCard;
