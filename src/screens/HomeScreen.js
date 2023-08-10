import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Explore from './bottomTabs/Explore';
import Network from './bottomTabs/Network';
import Chat from './bottomTabs/Chat';
import Contacts from './bottomTabs/Contacts';
import Groups from './bottomTabs/Groups';
import {Colors} from '../utils/colors';

const Bottom = createMaterialBottomTabNavigator();
const HomeScreen = () => {
  return (
    <Bottom.Navigator
      barStyle={{backgroundColor: 'transparent'}}
      inactiveColor={Colors.fontColorInActive}
      activeColor={Colors.Secondary}
      sceneAnimationType="shifting">
      <Bottom.Screen
        name="Explore"
        component={Explore}
        options={{tabBarIcon: 'eye'}}
      />
      <Bottom.Screen
        name="Network"
        component={Network}
        options={{tabBarIcon: 'network'}}
      />
      <Bottom.Screen
        name="Chat"
        component={Chat}
        options={{tabBarIcon: 'chat'}}
      />
      <Bottom.Screen
        name="Contacts"
        component={Contacts}
        options={{tabBarIcon: 'contacts'}}
      />
      <Bottom.Screen
        name="Groups"
        component={Groups}
        options={{tabBarIcon: 'group'}}
      />
    </Bottom.Navigator>
  );
};

export default HomeScreen;
