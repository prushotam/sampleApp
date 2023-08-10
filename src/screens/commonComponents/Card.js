import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/colors';
import {Button, Surface} from 'react-native-paper';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/others';



const maxRange = 10
const minRange = 0
const Card = ({data}) => {
  return (
    <View>
      {data.map((item, index) => (
        <View key={index} style={styles.card}>
          <Surface style={styles.surface} elevation={4}>
            <Text style={styles.label}>{item.label}</Text>
          </Surface>
          <View style={styles.cardItem}>
            <Button style={{right:SCREEN_WIDTH*-0.15}} mode="text">
              +INVITE
            </Button>
            <Text style={styles.name}>
              {item.firstname} {item.lastname}
            </Text>
            <Text>
              {item.place} | {item.studentType}
            </Text>
            <Text style={{fontWeight:700, color: Colors.Secondary}}>
              Within {item.rangeinkm} KM
            </Text>
            <ProgressBar progress={(item.rangeinkm - minRange) / (maxRange - minRange)} color={Colors.Primary} style={{maxWidth:SCREEN_WIDTH*0.5}}/>
            <Text style={{maxWidth:SCREEN_WIDTH*0.65}}>{item.message}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  name: {color: Colors.Secondary, fontSize: 16, fontWeight: 700},
  card: {
    width:SCREEN_WIDTH*0.8,
    flexDirection: 'row',
    borderRadius: 15,
    elevation: 3,
    marginBottom: 16,
    alignSelf:'center',
  },
  label: {
    fontSize:20,
    fontWeight:700,
    color:Colors.Primary
  },
  cardItem:{
    width:SCREEN_WIDTH*0.75
  },
  surface: {
  height:SCREEN_HEIGHT*0.12,
  width:SCREEN_WIDTH*0.20,
  top: SCREEN_HEIGHT*0.01,
    left:-30,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
    backgroundColor: Colors.labelBackground,
    borderRadius: 15,
  },
});
