import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles, Fonts } from 'App/Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: Metrics.navBarHeight + 10,
    marginBottom: 10
  },
  titleContainer: {
    alignItems: 'center'
  },
  title: {
    ...Fonts.style.h1,
    paddingTop: Metrics.doubleBaseMargin,
    color: Colors.snow
  },
  card: {
    width: 108,
    height: 80
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12
  },
  actionButton: {
    flex: 1,
    paddingHorizontal: 0,
    marginHorizontal: 8
  },
  wrapSignUp: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 12
  },
  signup: {
    flex: 1,
    maxWidth: 200,
    marginHorizontal: 8
  },
  socialActions: {
    borderTopWidth: 1.5,
    borderTopColor: Colors.border,
    marginHorizontal: 20,
    alignItems: 'center',
    paddingTop: 15
  },
  socialTitle: {
    ...Fonts.style.description,
    color: Colors.snow
  },
  social: {
    width: 50,
    height: 50
  },
  wrapSocial: {
    marginTop: 15,
    flexDirection: 'row'
  },
  skip: {
    marginVertical: 0,
    marginHorizontal: 0,
    paddingVertical: 10,
    marginRight: 20
  },
  mr5: {
    marginRight: 5
  },
  ml5: {
    marginLeft: 5
  },
  forgotWrapper: {
    position: 'absolute',
    right: 10,
    top: 34
  },
  forgot: {
    color: Colors.primaryLight,
    fontFamily: Fonts.type.base,
    fontSize: 16,
    textDecorationLine: 'underline'
  },
  password: {
    paddingRight: 75
  },
  rightButton: {
    marginRight: 20
  },
  headerTitle: {
    ...Fonts.style.h5,
    color: Colors.snow
  },
  headerTitleWrapper: {
    position: 'absolute',
    top: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  checkboxWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  checkboxLabel: {
    fontSize: 16,
    fontFamily: Fonts.type.base,
    color: Colors.snow
  },
  checkboxTerms: {
    fontSize: 16,
    fontFamily: Fonts.type.base,
    color: Colors.primaryExra
  }
})
