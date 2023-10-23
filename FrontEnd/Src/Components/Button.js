import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from "../Styles/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;


const Button = (props) => {
  const { buttonColor, buttontxt, goToOther } = props

  return (

    <TouchableOpacity style={[styles.touchBtn, { backgroundColor: buttonColor }]} onPress={goToOther}>
      <Text style={styles.txtBtn}>{buttontxt}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  touchBtn: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: hp(2)
  },
  txtBtn: {
    fontFamily: 'ApercuMonoProMedium',
    fontSize: 16,
    color: Colors.white
  },
})
export default Button;