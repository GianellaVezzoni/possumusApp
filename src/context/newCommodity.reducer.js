export const reducer = (state, action) => {
  switch(action.type){
    case 'ADD_COMMODITY':
      return {
        ...state,
        data: state.data
      }
    case 'ADD_YEARS':
      return {
        ...state,
        startYears: state.startYears,
        endYears: state.endYears
      }
    default: return state;
  }
}