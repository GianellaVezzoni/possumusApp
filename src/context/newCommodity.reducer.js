export const reducer = (state, action) => {
  switch(action.type){
    case 'ADD_COMMODITY':
      return {
        ...state,
        data: state.data,
        startYears: state.startYears,
        endYears: state.endYears
      }
    default: return state;
  }
}