export const adaptCommodityInformation = (items) => {
  const itemsOrdered = items.map((item, index)=> (
    {
      date: item.fields.date.split('-')[0],
      price: Math.round(item.fields.price_index),
      itemIndex: index
    }
  ));
  return itemsOrdered;
}
