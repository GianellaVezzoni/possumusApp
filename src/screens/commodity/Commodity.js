import React, {useState, useEffect, useCallback} from 'react'
import {View, Text, TextInput} from 'react-native';
import { getCommodityPrices } from '../../api/commodity';
import CommodityList from '../../components/commodityList/CommodityList';
import Footer from '../../components/widgets/footer/Footer';
import Header from '../../components/widgets/header/Header';
import { adaptCommodityInformation } from './Commodity.controller';
import { styles } from './styles';
import {useNewCommodityContext} from '../../context/CommodityContext';

const Commodity = () => {
  const {data, startYear, endYear, dispatch} = useNewCommodityContext();
  const [startYearFilter, setStartYearFilter] = useState('2001');
  const [endYearFilter, setEndYearFilter] = useState('');
  const [commodityData, setcommodityData] = useState(data || []);

  const getCommodities = useCallback(async()=> {
    const response = await getCommodityPrices(startYearFilter, endYearFilter);
    const itemsOrdered = adaptCommodityInformation(response, startYear, endYear, dispatch);
    setcommodityData(itemsOrdered);
  },[getCommodityPrices, startYear, endYear]);

  useEffect(()=> {
    getCommodities();
  },[getCommodities]);

  return (
    <View>
      <Header />
      <View style={styles.viewMainContainer}>
        <Text style={styles.titleText}>
          Commodity Price
        </Text>
        <Text style={styles.titleText}>
          Period
        </Text>
        <View style={{marginTop: 10, marginBottom: 30}}>
          <View style={styles.yearInputContainer}>
            <Text>
              Start
            </Text>
            <TextInput 
              style={styles.yearInput} 
              value={startYearFilter} 
              onChangeText={(text)=> setStartYearFilter(text)} 
            />
          </View>
          <View style={styles.yearInputContainer}>
            <Text>
              End
            </Text>
            <TextInput 
              style={styles.yearInput} 
              value={endYearFilter} 
              onChangeText={(text)=> 
              setEndYearFilter(text)} 
            />
          </View>
        </View>
        <View style={styles.viewListContainer}>
          <CommodityList data={commodityData} />
        </View>
      </View>
      <Footer />
    </View>
  )
}

export default Commodity