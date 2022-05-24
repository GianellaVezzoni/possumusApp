export const adaptCommodityInformation = (responses, data, dispatch, setCurrentData) => {
  const itemsArray = responses.map((response)=>{
    return response.data.records;
  });
  const informationList = data;
  itemsArray?.map((items)=> {
    if(items.length){
      const itemsOrdered = items.map((item, index)=> (
        {
          date: item.fields.date.split('-')[0],
          price: Math.round(item.fields.price_index),
          itemIndex: index
        }
      ));
      informationList.push(itemsOrdered);
    }
  });

  dispatch({
    type: 'ADD_COMMODITY',
    payload: {
      data: informationList
    }
  });
  setCurrentData(informationList);
  return;
}

export const searchDataByFilter = (startYearFilter, endYearFilter, data) => {
  let dataFiltered = [];
  let filteredData = [];
  if(endYearFilter){
    const datesArray = completeYearsArray(startYearFilter, endYearFilter);
    filteredData = datesArray?.map((date, index) => {
      return data?.filter((item) => item.date === date);
    });
  }else{
    const datesArray = completeYearsArray(startYearFilter, '2016');
    filteredData = datesArray?.map((date, index) => {
      return data?.filter((item) => item.date === date);
    });
  }  
  if(dataFiltered.length){
    dataFiltered?.contact(filteredData);
    return dataFiltered;
  }else{
    return [];
  }
}

export const completeYearsArray = (startYearFilter, endYearFilter) => {
  let nextYear = parseInt(startYearFilter);
  const auxArray = [nextYear];
  while(nextYear < parseInt(endYearFilter)){
    nextYear++;
    auxArray.push(nextYear);
  }
  auxArray.push(endYearFilter);
  return auxArray;
}