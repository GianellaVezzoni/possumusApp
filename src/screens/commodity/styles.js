import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  viewMainContainer: {
    alignItems: 'center',
    top: 50
  },
  titleText:{
    fontSize: 36,
    fontWeight: '400',
    color: '#000'
  },
  yearInputContainer: {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    width: 120,
    marginTop: 20
  },
  yearInput: {
    borderWidth: 1,
    width: 75.5,
    paddingVertical: 0
  },
  viewListContainer:{
    height: 280, 
    marginBottom: 63
  }
});