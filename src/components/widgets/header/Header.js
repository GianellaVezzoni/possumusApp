import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

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
      {isSidebarVisible && (
        <View>
          <Text>
            Sidebar
          </Text>
        </View>
      )}
    </View>
  )
}

export default Header