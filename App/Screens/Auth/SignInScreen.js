import Input from 'App/Components/Form/Input'
import RoundedButton from 'App/Components/RoundedButton'
import TransparentButton from 'App/Components/TransparentButton'
import validator from 'App/Lib/validator'
import Colors from 'App/Themes/Colors'
import LinearGradient from 'react-native-linear-gradient'
import React, { Component } from 'react'
import { Image, KeyboardAvoidingView, Text, View, Platform, TouchableOpacity } from 'react-native'
import { compose } from 'redux'
import { Field, reduxForm } from 'redux-form'
import styles from './styles'

class SignInScreen extends Component {
  static navigationOptions = {
    headerLeft: null,
    headerRight: (
      <TransparentButton containerStyles={styles.skip}>skip</TransparentButton>
    )
  }

  render () {
    const { handleSubmit, navigation } = this.props
    return (
      <LinearGradient colors={[Colors.secondaryLight, Colors.secondary]} style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          contentContainerStyle={styles.mainContainer}
          behavior='position'
          keyboardVerticalOffset={Platform.OS === 'android' ? -75 : -120}
        >
          <View style={styles.titleContainer}>
            <Image source={require('App/Images/Card.png')} style={styles.card} />
            <Text style={styles.title}>polycard</Text>
          </View>
          <View>
            <Field
              name='email'
              returnKeyType='next'
              keyboardType='email-address'
              component={Input}
              label='Email'
            />
            <Field
              name='password'
              component={Input}
              label='Password'
              secureTextEntry
              returnKeyType='done'
              inputStyle={styles.password}
              rightComponent={(
                <TouchableOpacity style={styles.forgotWrapper}>
                  <Text style={styles.forgot}>Forgot ?</Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={styles.actions}>
            <TransparentButton
              onPress={() => navigation.navigate('SignUpScreen')}
              containerStyles={styles.actionButton}
            >
              Sign up
            </TransparentButton>
            <RoundedButton onPress={handleSubmit} containerStyles={styles.actionButton}>Login</RoundedButton>
          </View>
          <View style={styles.socialActions}>
            <Text style={styles.socialTitle}>LOGIN WITH</Text>
            <View style={styles.wrapSocial}>
              <Image source={require('App/Images/facebook.png')} style={[styles.social, styles.mr5]} />
              <Image source={require('App/Images/google-plus.png')} style={styles.social} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    )
  }
}

export default compose(
  reduxForm({
    form: 'sign-in',
    validate: validator({
      email: [['email']],
      password: [['required']]
    }),
    onSubmit: (values, dispatch) => console.log(values)
  })
)(SignInScreen)
