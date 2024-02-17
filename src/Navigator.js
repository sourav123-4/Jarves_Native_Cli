import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {incremented} from './redux/slices/CounterSlice.js';
import {useListofproductsQuery} from './redux/api/Api.js';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './containers/Home/Home.js';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function Navigator() {
  const dispatch = useDispatch();
  const {value} = useSelector(state => state.counter);
  const {data} = useListofproductsQuery();
  console.log('data is=====>', data);
  return (
    // <Stack.Navigator>
    //   <Stack.Screen name="Home" component={Home} />
    // </Stack.Navigator>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={Home} />
    // </Tab.Navigator>
  );
}
