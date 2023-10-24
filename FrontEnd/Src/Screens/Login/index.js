import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Platform
} from 'react-native';

import Styles from './Styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import Button from "../../Components/Button";
import Ionic from 'react-native-vector-icons/Ionicons';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from "react-native-toast-notifications";

const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

const BASE_URL = Platform.OS == "android" ? "http://10.0.0.45:8080" : "http://localhost:8080"

export default function Login(props) {
  const toast = useToast();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [progress, setProgress] = useState(false)

  const onSubmit = () => {
    if (email == "" || reg.test(email) === false) {

      toast.show("Email is Invalid", {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        offset: 30,
        animationType: "slide-in",
      });
    }
    else if (password == "") {

      toast.show("Invalid Password", {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        offset: 30,
        animationType: "slide-in",
      });
    }
    else {
      setProgress(false)
      let data = {
        username: email,
        password: password,
      }
      console.log("The Data is:", data)
      axios
        .post(`${BASE_URL}/auth`, data, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Access-Control-*": "*"
          },
        })
        .then(response => {
          console.log("The Response is: ", response.data)
          if (response.status == 200) {
            setProgress(false)
            if (response.data?.token) {
              toast.show("Login Successfully!", {
                type: "success",
                placement: "bottom",
                duration: 4000,
                offset: 30,
                animationType: "slide-in",
              });
              saveData(response.data)
            }
            else {
              toast.show("Invalid Email/Password", {
                type: "danger",
                placement: "bottom",
                duration: 4000,
                offset: 30,
                animationType: "slide-in",
              });
            }

          }
        })
        .catch(error => {

          toast.show("Invalid Email/Password", {
            type: "danger",
            placement: "bottom",
            duration: 4000,
            offset: 30,
            animationType: "slide-in",
          });
          console.log(error)
          setProgress(false)
        });
    }
    // 
  };

  saveData = async (data) => {
    try {
      AsyncStorage.setItem('user', JSON.stringify(data));
      console.log("Yes")
      props.navigation.navigate("Home")
    } catch (err) {
      console.log("No", err)
    }
  }

  return (
    <ImageBackground source={Images.background} style={Styles.backgroundContainer}>
      <SafeAreaView style={Styles.safeAreaContainer}>
        <StatusBar barStyle={'light-content'} />
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
          enableOnAndroid={true} extraHeight={130} extraScrollHeight={130}
          enableAutomaticScroll={(Platform.OS === 'ios')}
          contentContainerStyle={Styles.safeAreaContainer}>
          <View style={Styles.mainContainer}>

            <View style={Styles.headerView}>
              <View style={Styles.headerWrapper}>
                <TouchableOpacity>
                  <Ionic
                    name="arrow-back-circle"
                    size={30}
                    style={{
                      color: Colors.black,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Header Logo/Name */}
            <View style={Styles.centerView}>
              <Text style={Styles.headerText}>{'FootFrenzy'}</Text>
            </View>

            {/* Email  & Password  TextInput */}
            <View style={Styles.credentialsView}>


              <Text style={Styles.primary}>{'Enter Email'}</Text>
              <View style={Styles.wrapper}>
                <TextInput style={Styles.textInput}
                  value={email}
                  placeholder={"Email"}
                  placeholderTextColor={Colors.textBlack}
                  onChangeText={(value) => {
                    setEmail(value)
                  }}
                />
              </View>


              <Text style={Styles.primary}>{'Enter Password'}</Text>
              <View style={Styles.wrapper}>
                <TextInput style={Styles.textInput}
                  value={password}
                  placeholder={"Password"}
                  placeholderTextColor={Colors.textBlack}
                  onChangeText={(value) => {
                    setPassword(value)
                  }}
                />
                <TouchableOpacity>
                  <Text style={Styles.forgot}>{"Forgot?"}</Text>
                </TouchableOpacity>
              </View>

              {/* Button Sign in */}
              <Button
                goToOther={onSubmit}
                buttontxt={"SIGN IN"}
                buttonColor={Colors.pink} />
            </View>

            {/* OR Component */}

            <View style={Styles.seperateView}>

              <View style={Styles.seperateWrapper}>
                <View style={Styles.lineSeperate} />
                <Text style={Styles.sperateText}>{'OR'}</Text>
                <View style={Styles.lineSeperate} />
              </View>

            </View>

            {/* Social Logins */}
            <View style={Styles.bottomView}>

              {/* Google Button */}
              <TouchableOpacity style={Styles.googleContainer}>
                <View style={Styles.googleWrapper}>
                  <View style={Styles.empty} />
                  <Text style={Styles.googleText}>{`Connect with Google`}</Text>
                  <Image source={Images.google} style={Styles.googleIcon} />
                </View>
              </TouchableOpacity>

              {/* Facebook Button */}
              <TouchableOpacity style={Styles.facebookContainer}>
                <View style={Styles.googleWrapper}>
                  <View style={Styles.empty} />
                  <Text style={Styles.facebookText}>{`Connect with Facebook`}</Text>
                  <Ionic
                    name="logo-facebook"
                    size={25}
                    style={{
                      color: Colors.white,
                    }}
                  />
                </View>
              </TouchableOpacity>

              {/* Facebook Twitter */}
              <TouchableOpacity style={Styles.twitterContainer}>
                <View style={Styles.googleWrapper}>
                  <View style={Styles.empty} />
                  <Text style={Styles.twitterText}>{`Connect with Twitter`}</Text>
                  <Ionic
                    name="logo-twitter"
                    size={25}
                    style={{
                      color: Colors.white,
                    }}
                  />
                </View>
              </TouchableOpacity>

            </View>


          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}