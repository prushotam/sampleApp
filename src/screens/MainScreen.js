import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SideScreen from './SideScreen';
import HomeScreen from './HomeScreen';
import {Colors} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, {SlideInDown, SlideInUp} from 'react-native-reanimated';

const Drawer = createDrawerNavigator();
const MainScreen = () => {
  const HeaderRightIcon = () => {
    const navigation = useNavigation(); // Get the navigation object using the useNavigation hook

    const handlePress = () => {
      navigation.navigate('Refine'); // Use the navigation object to open the drawer when the left icon is pressed
    };

    return (
      <TouchableOpacity onPress={handlePress} style={{marginHorizontal: 5}}>
        <Icon
          name="format-list-checks"
          size={30}
          color={Colors.fontColorActive}
        />
        <Text style={{color:Colors.fontColorActive}}>Refine</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Animated.View style={{flex: 1}} entering={SlideInUp} exiting={SlideInDown}>
      <StatusBar backgroundColor={Colors.Primary} />
      <Drawer.Navigator drawerContent={props => <SideScreen {...props} />}>
        <Drawer.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerStyle: {backgroundColor: Colors.Primary},
            headerTitleContainerStyle: {flexWrap: 'wrap'},
            headerTitle: 'Howdy Prushotam Mishra !!\n & Location', //Actually it should be updated from backend data but hardcoded here
            headerTitleStyle: {
              fontWeight: 'normal',
              fontSize: 15,
              flexWrap: 'wrap',
            },
            headerTintColor: Colors.fontColorActive,
            headerRight: () => HeaderRightIcon(),
          }}
        />
      </Drawer.Navigator>
    </Animated.View>
  );
};

export default MainScreen;
