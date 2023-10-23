import { StyleSheet, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Colors from '../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  backgroundContainer: {
    width: widthScreen,
    height: heightScreen,
  },
  safeAreaContainer: {
    // flex: 1
    flexGrow: 1,
  },
  mainContainer: {
    flex: 1,
  },
  headerWrapper: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
  },
  headerView: {
    flex: 0.1,
    justifyContent: 'center',
  },
  centerView: {
    flex: 0.1,
    justifyContent: 'flex-end',
    alignItems: "center"
  },

  headerText: {
    fontFamily: 'BebasNeue-Regular',
    fontSize: 38,
    color: Colors.white,
  },

  credentialsView: {
    flex: 0.35,
    justifyContent: "flex-end"
  },
  titleText: {
    fontFamily: 'ApercuMonoProBold',
    fontSize: 24,
    color: Colors.black,
    marginTop: hp(2),
    textAlign: 'center'
  },
  descriptionText: {
    fontFamily: 'ApercuMonoProMedium',
    fontSize: 16,
    color: Colors.black,
    marginTop: hp(1),
    textAlign: 'center',
    width: "60%",
    alignSelf: 'center'
  },
  primary: {
    fontFamily: 'ApercuMonoProMedium',
    fontSize: 16,
    color: Colors.white,
    width: widthScreen / 1.2,
    alignSelf: 'center',
  },
  wrapper: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    backgroundColor: Colors.white,
    height: hp(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.white,
    marginTop: hp(0.8),
    marginBottom: hp(2.4),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  textInput: {
    flex: 1,
    fontFamily: 'ApercuMonoProBold',
    fontSize: 14,
    color: Colors.textBlack,
    marginLeft: hp(1.5),
  },
  userEmailAndroid: {
    flex: 1,
    fontFamily: 'ApercuMonoProBold',
    fontSize: 14,
    color: Colors.textBlack,
    marginLeft: hp(1.5),
    includeFontPadding: false,
  },
  defaultButton: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    height: hp(6),
    backgroundColor: Colors.mediumPink,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: hp(2)
  },
  bT: {
    fontFamily: 'ApercuMonoProMedium',
    fontSize: 16,
    color: Colors.white
  },
  seperateView: {
    flex: 0.1,
    justifyContent: "center"
  },
  seperateWrapper: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    marginTop: hp(3),
  },
  lineSeperate: {
    width: "43%",
    alignSelf: 'center',
    height: 0.8,
    backgroundColor: Colors.mediumGrey,
  },
  sperateText: {
    fontFamily: 'ApercuMonoProMedium',
    fontSize: 22,
    color: Colors.lightGrey,
  },
  googleContainer: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    height: hp(6),
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(3),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
  },
  googleWrapper: {
    width: "90%",
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
  },
  googleIcon: {
    width: 25,
    height: 25
  },
  empty: {
    width: 20
  },
  googleText: {
    fontFamily: 'ApercuMonoProMedium',
    fontSize: 14,
    color: Colors.textBlack
  },
  forgot: {
    fontFamily: 'ApercuMonoProMedium',
    fontSize: 14,
    color: Colors.darkGrey,
    marginRight: hp(1.5),
  },
  facebookContainer: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    height: hp(6),
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(3),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.fbColor,
    backgroundColor: Colors.fbColor,
  },
  facebookText: {
    fontFamily: 'ApercuMonoProMedium',
    fontSize: 14,
    color: Colors.white
  },
  bottomView: {
    flex: 0.35,
    justifyContent: "flex-start"
  },
  twitterContainer: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    height: hp(6),
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(3),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.mediumBlue,
    backgroundColor: Colors.mediumBlue,
  },
  twitterText: {
    fontFamily: 'ApercuMonoProMedium',
    fontSize: 14,
    color: Colors.white
  },
});
export default styles;