import React, { useMemo } from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from "../Styles/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;


const ProductCard = (props) => {
  const { item, keyID, style } = props
  const randomBool = useMemo(() => Math.random() < 0.5, []);

  return (
    <View key={keyID} style={[Styles.wrapper, style]}>
      <Image
        source={{ uri: item?.imgURL }}
        style={{
          height: randomBool ? 150 : 280,
          alignSelf: 'stretch',
          borderRadius: 8
        }}
        resizeMode="cover"
      />
      <Text
        style={Styles.title}>
        {item?.text}
      </Text>
      <Text
        style={Styles.priceText}>
        {item?.price}
      </Text>
    </View>
  )
}

const Styles = StyleSheet.create({

  wrapper: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 12,
    flex: 1
  },
  title: {
    fontFamily: 'ApercuMonoProBold',
    fontSize: 14,
    color: Colors.textBlack,
    marginTop: hp(1.3)
  },
  priceText: {
    fontFamily: 'ApercuMonoProMedium',
    fontSize: 12,
    color: Colors.darkGrey,
    marginTop: hp(0.5)
  }


})
export default ProductCard;