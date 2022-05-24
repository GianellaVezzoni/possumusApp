import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, TouchableOpacity, FlatList, View} from 'react-native';
import { styles } from './styles';

const CommodityList = ({data}) => {
  const [showInfo, setShowInfo] = useState(null);

  const renderItem = ({ item, index }) => (
    <TouchableOpacity style={styles.dropdownOption} onPress={()=> setShowInfo(index)}>
      <View style={styles.viewTitleTabContainer}>
        <Text style={styles.tabTitle}>Commodity {index+1}</Text>
        {showInfo === index ? ( 
          <Icon name="chevron-up-outline" color={'#000'} size={30} /> 
          ) : (
          <Icon name="chevron-down-outline" color={'#000'} size={30} /> 
        )}
      </View>
      {showInfo === index && (
        <View>
          <View style={styles.viewTabInfoContainer}>
            <Text style={styles.tabInfo}>Year</Text>
            <Text style={styles.tabInfo}>Price</Text>
          </View>
          <View style={styles.viewTabInfoContainer}>
            <Text style={styles.tabInfo}>
              {item.date}
            </Text>
            <Text style={styles.tabInfo}>
              USD {item.price}
            </Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <FlatList
      ListEmptyComponent={<Text>No items found</Text>}
      data={data}
      scrollEnabled
      renderItem={renderItem}
      keyExtractor={item => item.itemIndex}
    />
  );
}

export default CommodityList