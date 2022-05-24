import React, {useState, useEffect, useCallback} from 'react'
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import { getCommodityPrices } from '../../api/commodity';
import CommodityList from '../../components/commodityList/CommodityList';
import Footer from '../../components/widgets/footer/Footer';
import Header from '../../components/widgets/header/Header';
import { adaptCommodityInformation, searchDataByFilter } from './Commodity.controller';
import { styles } from './styles';
import {useNewCommodityContext} from '../../context/CommodityContext';

const Commodity = (props) => {
  const {data, dispatch} = useNewCommodityContext();
  const [currentData, setCurrentData] = useState([]);
  const [startYearFilter, setStartYearFilter] = useState('2001');
  const [endYearFilter, setEndYearFilter] = useState('2016');

  const getCommodities = useCallback(async()=> {
    const previousData = searchDataByFilter(startYearFilter, endYearFilter, data);
    if(!previousData.length){
      const response = await getCommodityPrices(startYearFilter, endYearFilter, dispatch);
      adaptCommodityInformation(response, data, dispatch, setCurrentData);
    }else{
      setCurrentData(previousData)
    }
  },[getCommodityPrices, startYearFilter, endYearFilter]);

  useEffect(()=> {
    getCommodities();
  },[getCommodities]);

  return (
    <SafeAreaView>
      <Header props={props} />
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
              keyboardType={'numeric'}
              maxLength={4}
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
              maxLength={4}
              keyboardType={'numeric'}
              onChangeText={(text)=> 
              setEndYearFilter(text)}
            />
          </View>
        </View>
        <View style={styles.viewListContainer}>
          <CommodityList data={currentData} />
        </View>
      </View>
      <Footer />
    </SafeAreaView>
  )
}

export default Commodity