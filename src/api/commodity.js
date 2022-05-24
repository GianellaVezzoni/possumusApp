import axios from 'axios';
import { COMMODITY_PATH } from '../constants';
import {completeYearsArray} from '../screens/commodity/Commodity.controller';

export const getCommodityPrices = async (startYearFilter, endYearFilter, dispatch) => {
  let yearsArray = [];
  if(endYearFilter){
    yearsArray = completeYearsArray(startYearFilter, endYearFilter);
  }else{
    yearsArray = completeYearsArray(startYearFilter, '2016');
  }
  try{
    const promisesArray = [];
    yearsArray?.forEach(async(year)=> {
      let request;
      request = await axios.get(`${COMMODITY_PATH}/search/?dataset=commodity-prices%40public&q=&facet=date&facet=commodity&refine.date=${year.toString()}`)
        .then((response) => promisesArray.push(response.data))
        .catch((error) => {throw new Error(error)});
    });
    const responses = await Promise.All(promisesArray);
    if(responses){
      return responses;
    }else{
      throw new Error;
    }
  }catch(err){
    return [];
  }
}