import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Personal from '../topTabs/Personal'
import Business from '../topTabs/Business'
import Merchant from '../topTabs/Merchant'
import { Colors } from '../../utils/colors'


const Tab = createMaterialTopTabNavigator()
const Explore = () => {
  return (
    <Tab.Navigator
screenOptions={{
  tabBarStyle:{backgroundColor: Colors.Secondary},
  tabBarActiveTintColor: Colors.fontColorActive,
  tabBarInactiveTintColor:Colors.fontColorInActive
  }}
>
    <Tab.Screen name="Personal" component={Personal} />
    <Tab.Screen name="Business" component={Business} />
    <Tab.Screen name="Merchant" component={Merchant} />
  </Tab.Navigator>
  )
}

export default Explore

const styles = StyleSheet.create({})