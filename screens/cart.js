import React from 'react';
import {Node} from 'react';
import {Text, View, Button, Image, ScrollView} from 'react-native';
import {StackActions} from '@react-navigation/native';
import data from './phoneInfo';
import ProdCard from './prodCard';
import {useSelector, useDispatch} from 'react-redux';
import {setName} from '../app/slices/nameSlice';
const Cart = ({navigation, route}) => {
  const name = useSelector(state => state.name.value);

  return (
    <ScrollView>
      <ProdCard />
    </ScrollView>
  );
};

export default Cart;
