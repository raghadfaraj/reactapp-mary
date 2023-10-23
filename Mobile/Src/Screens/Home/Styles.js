import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;

const Styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: Colors.lightPink
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.lightPink
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.lightPink
  },

  headerWrapper: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(2)
  },
  headerText: {
    fontFamily: 'ApercuMonoProBold',
    fontSize: 20,
    color: Colors.black,
  },
  primary: {
    fontFamily: 'ApercuMonoProMedium',
    fontSize: 25,
    color: Colors.textBlack,
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: hp(2),
  },

  scrollContent: {
    marginBottom: hp(6)
  },
  listContainer: {
    marginTop: hp(5),
  },
  listWrapper: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(3),
    marginBottom: hp(3)
  },

  profileText: {
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'ApercuMonoProMedium',
    color: Colors.mediumBlack,
  },

  listBottomWrap: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gapSeperate: {
    marginLeft: wp(4)
  },
  nameStatusContainer: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: hp(1.5),
  },
  nameStatusWrap: {
    fontStyle: 'normal',
    fontFamily: 'ApercuMonoProMedium',
    color: Colors.mediumBlack,
    lineHeight: 18
  },
  statusName: {
    fontSize: hp(1.7),
    fontWeight: '500',
  },
  statusDescription: {
    fontSize: hp(1.4),
    fontWeight: '400',
  },
  commentText: {
    fontSize: hp(1.4),
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'ApercuMonoProMedium',
    color: Colors.skipText,
  },
  emailWrapper: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    flexDirection: 'row',
    borderColor: Colors.mediumGrey,
    backgroundColor: Colors.mediumGrey,
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(4),
    borderRadius: 8,
    marginBottom: hp(3)
  },
  emailInput: {
    flex: 1,
    fontFamily: 'ApercuMonoProBold',
    fontSize: 14,
    color: Colors.textBlack,
    marginLeft: hp(1.5),
  },
  inputIcon: {
    width: hp(3.2),
    height: hp(3.2),
    borderRadius: hp(3.2),
    marginRight: wp(3),
    marginLeft: hp(2)
  },
  container: {
    // backgroundColor: '#2F3541',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    // marginLeft: wp(3)
  },
  inActiveContainer: {
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    // marginRight: hp(1),
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeTab: {
    fontFamily: 'ApercuMonoProBold',
    fontSize: hp(1.5),
    color: Colors.white,
    // margin: hp(1.5)
    marginHorizontal: wp(4.5),
    marginVertical: hp(1)
  },
  inActiveTab: {
    fontFamily: 'ApercuMonoProBold',
    fontSize: hp(1.5),
    color: Colors.grey,
    marginHorizontal: wp(3.5),
    marginVertical: hp(1)
    // marginLeft: wp(3),
  },
});
export default Styles;