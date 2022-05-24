import React, {useState} from 'react';
import {
  View,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Sidebar from '../../Sidebar';

const Header = (props) => {
  console.log('props ', props)
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  return (
    <View style={{
      backgroundColor: '#D3CACA',
      height: 50,
      paddingHorizontal: 20,
      paddingVertical: 10
    }}>
      <TouchableOpacity
        onPress={()=> setIsSidebarVisible(!isSidebarVisible)}
      >
        <Icon name="menu-outline" color={'#000'} size={30} />
      </TouchableOpacity>
      {isSidebarVisible && <Sidebar setIsSidebarVisible={setIsSidebarVisible} navigation={props} />}
    </View>
  )
}

export default Header;