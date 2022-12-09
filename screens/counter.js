import React from 'react';
import {Node} from 'react';
import {Text, View, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../app/slices/counterSlice';

const Counter = ({navigation}) => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);
  return (
    <View>
      <Text>Count: {count}</Text>
      <View style={{flexDirection: 'row', height: 50}}>
        <Button
          style={{width: 200}}
          title="+"
          onPress={() => {
            dispatch(increment());
          }}
        />
        <Button
          style={{width: 100}}
          title="-"
          onPress={() => {
            dispatch(decrement());
          }}
        />
      </View>
      <Button
        title="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default Counter;
