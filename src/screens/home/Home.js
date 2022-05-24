import React from 'react'
import {View, Text, Image} from 'react-native';
import Header from '../../components/widgets/header/Header';
import { styles } from './styles';

const Home = () => {
  return (
    <View>
      <Header />
      <View style={styles.viewContainer}>
        <Image 
          style={styles.imageProfile}
          source={require('../../assets/images/profile.jpg')}
          alt={'Profile picture'}
        />
        <Text style={styles.nameTitleText}>
          Gianella Vezzoni
        </Text>
        <Text style={{...styles.nameTitleText, fontWeight: '300'}}>
          'Giane'
        </Text>
        <Text style={styles.generalInfoText}>
          Base in Mendoza, Arg
        </Text>
        <Text style={{...styles.generalInfoText, ...styles.mailText}}>
          vezzoni.00@gmail.com
        </Text>
      </View>
    </View>
  )
}

export default Home