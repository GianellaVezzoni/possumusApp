import axios from 'axios';
import { COMMODITY_PATH } from '../constants';

export const getCommodityPrices = async (startYear, endYear) => {
  const response = await axios.get(`${COMMODITY_PATH}/search/?dataset=commodity-prices%40public&q=&facet=date&facet=commodity&refine.date=${startYear}`);
  return response.data.records;
}