import {View, Text, Button} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useListofproductsQuery} from '../../redux/api/Api';
import {incremented} from '../../redux/slices/CounterSlice';

const Home = () => {
  const dispatch = useDispatch();
  const {value} = useSelector(state => state.counter);
  const {data} = useListofproductsQuery();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{value}</Text>
      <Button
        onPress={() => {
          dispatch(incremented());
        }}
        title="Click to increment"
      />
    </View>
  );
};

export default Home;
