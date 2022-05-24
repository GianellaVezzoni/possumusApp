import React from 'react';
import {View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const Sidebar = (props) => {
  const {setIsSidebarVisible} = props;

  console.log('props en el sidebar ', props)
  return (
    <View 
      style={{
        position: 'absolute',
        backgroundColor: '#C2BBBB',
        height: 630,
        width: 250,
        flex: 1,
        zIndex: 999
      }}
    >
      <View style={{
        alignSelf: 'flex-end',
        paddingVertical: 10,
        paddingHorizontal: 10
      }}>
        <TouchableOpacity onPress={()=> setIsSidebarVisible(false)}>
          <Icon name="arrow-back-outline" color={'#000'} size={30} />
        </TouchableOpacity>
      </View>
      <View style={{
        marginTop: 30,
        paddingHorizontal: 20
      }}>
        <TouchableOpacity onPress={()=> props.navigation.navigate('Home')}>
          <Text
            style={{
              fontSize: 18,
              color: '#000',
              marginBottom: 15
            }}
          >
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> props.navigation.navigate('Commodity')}>
          <Text
            style={{
              fontSize: 18,
              color: '#000'
            }}
          >
            Cotización períodos
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Sidebar