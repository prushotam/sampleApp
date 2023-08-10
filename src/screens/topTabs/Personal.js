import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../utils/colors';
import SearchBar from '../commonComponents/SearchBar';
import { FAB } from 'react-native-paper';
import Card from '../commonComponents/Card';
const Personal = () => {
  const [data, setData ] = useState([])

  useEffect(()=>{
    const jsonData = require('../../utils/sample.json')
    setData(jsonData.data)
  },[])


  return (
    <View style={{flex:1,marginHorizontal:10}}>
    <SearchBar onSearch={data}/>
    <ScrollView style={{}}>
    <Card data={data}/>
    </ScrollView>
    <FAB style={styles.floatButton} label='+' color={Colors.fontColorActive} size='large'/>
    </View>
  )
}

export default Personal

const styles = StyleSheet.create({
floatButton:{
  borderColor:Colors.Primary,
  borderWidth:1,
  borderRadius:50,
  backgroundColor:Colors.Primary,
  position:'absolute',
  bottom:5,
  right:5,
  alignSelf:'flex-end',
  fontSize:30,
  color:Colors.fontColorActive
}

})