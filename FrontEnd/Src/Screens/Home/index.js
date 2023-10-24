import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
  StatusBar,
  FlatList,
  Platform
} from 'react-native';
import Colors from '../../Styles/Colors';
import Images from '../../Styles/Images';
import Styles from './Styles';
import Ionic from 'react-native-vector-icons/Ionicons';
import ProductCard from "../../Components/ProductCard";
import { useFocusEffect } from "@react-navigation/native";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = Platform.OS == "android" ? "http://192.168.100.12:8080" : "http://localhost:8080"

export default function HomePage(props) {

  const [search, setSearch] = useState("")
  const [tab, setTab] = useState(1)
  const [dataList, setDisplay] = useState([])
  const [fullData, setAllData] = useState([])

  useFocusEffect(
    React.useCallback(() => {
      // postGet();
      getProductsDisplay()
      /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, [])
  );
  const getProductsDisplay = async () => {
    try {
      const fetchData = await axios.get(`${BASE_URL}/search`, {
        headers: {
          "Content-Type": 'application/json',
          'Accept': 'application/json',
          "Access-Control-*": "*"
        },
      })
      setDisplay(fetchData?.data ? fetchData.data : [])
      setAllData(fetchData?.data ? fetchData.data : [])
      // console.log("getUserAlbums------", fetchData.data)
    } catch (error) {
      console.log(error)
    }
  }
  const selectTab = (num) => {
    // let result = { ...fullData }
    setTab(num)
    if (num == 1) {
      setDisplay(fullData)
    }
    else if (num == 2) {
      let result = fullData?.filter(o1 => o1?.category === "Running")
      setDisplay(result)
    }
    else if (num == 3) {
      let result = fullData?.filter(o1 => o1?.category === "Walking")
      setDisplay(result)
    }
  }

  const itemCompact = (item, keyID) => {
    return (
      <ProductCard item={item} keyID={keyID} style={{ marginLeft: keyID % 2 === 0 ? 0 : 12 }} />
    );
  }

  const searchData = () => {
    
  }

  return (
    <SafeAreaView style={Styles.backgroundContainer}>
      <StatusBar barStyle={'light-content'} />
      <View style={Styles.mainContainer}>

        <View style={Styles.headerWrapper}>
          <Text style={Styles.headerText}>{"S H O W M E"}</Text>

          <TouchableOpacity>
            <Ionic
              name="menu"
              size={28}
              style={{
                color: Colors.black,
              }}
            />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.scrollContent}>


            <Text style={Styles.primary}>{'The Most Popular Jackets Today'}</Text>

            <View style={Styles.emailWrapper}>
              <Ionic
                name="search"
                size={15}
                style={{
                  color: Colors.textBlack,
                  marginLeft: 15
                }}
              />
              <TextInput
                style={Styles.emailInput}
                value={search}
                placeholder={"Search"}
                placeholderTextColor={Colors.textBlack}
                autoCapitalize='none'
                onChangeText={(value) => {
                  setSearch(value)
                }}
              />
            </View>

            <View style={Styles.listWrapper}>

              <TouchableOpacity style={tab == 1 ? Styles.inActiveContainer : Styles.container}
                onPress={() => selectTab(1)}>
                <Text style={tab == 1 ? Styles.activeTab : Styles.inActiveTab}>{"All Jackets"}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={tab == 2 ? Styles.inActiveContainer : Styles.container}
                onPress={() => selectTab(2)}>
                <Text style={tab == 2 ? Styles.activeTab : Styles.inActiveTab}>{"Running"}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={tab == 3 ? Styles.inActiveContainer : Styles.container}
                onPress={() => selectTab(3)}>
                <Text style={tab == 3 ? Styles.activeTab : Styles.inActiveTab}>{"Walking"}</Text>
              </TouchableOpacity>

            </View>


            <FlatList
              data={dataList}
              numColumns={2}
              contentContainerStyle={{
                paddingHorizontal: 24,
                alignSelf: 'stretch',
              }}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => itemCompact(item, index, false)} />

          </View>

        </ScrollView>

      </View>
    </SafeAreaView >
  )
}