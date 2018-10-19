import Checkbox from 'App/Components/Form/Checkbox';
import Input from 'App/Components/Form/Input';
import RoundedButton from 'App/Components/RoundedButton';
import validator from 'App/Lib/validator';
import Colors from 'App/Themes/Colors';
import LinearGradient from 'react-native-linear-gradient';
import React, { Component } from 'react';
import { Image, KeyboardAvoidingView, Text, View, Platform, TouchableOpacity } from 'react-native';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import styles from './styles';

class SignInScreen extends Component {
  static navigationOptions = {
    headerLeft: null,
    headerRight: (
      <TouchableOpacity style={styles.rightButton}>
        <Image source={require('App/Images/Icons/close-icon.png')} />
      </TouchableOpacity>
    )
  }

  render () {
    const { handleSubmit } = this.props;
    return (
      <LinearGradient colors={[Colors.secondaryLight, Colors.secondary]} style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          contentContainerStyle={styles.mainContainer}
          behavior='position'
          keyboardVerticalOffset={Platform.OS === 'android' ? -75 : -120}
        >
          <View style={styles.headerTitleWrapper}>
            <Text style={styles.headerTitle}>Signup</Text>
          </View>
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
            />
            <Field
              name='rights'
              component={Checkbox}
              label={(
                <View style={styles.checkboxWrapper}>
                  <Text style={styles.checkboxLabel}>
                    I'm agree with
                    {' '}
                    <Text onPress={() => console.log('hi')} style={styles.checkboxTerms}>
                      Terms of use& Privacy Policy
                    </Text>
                  </Text>
                </View>
              )}
            />
          </View>
          <View style={styles.wrapSignUp}>
            <RoundedButton onPress={handleSubmit} containerStyles={styles.signup}>Sign up</RoundedButton>
          </View>
          <View style={styles.socialActions}>
            <Text style={styles.socialTitle}>SIGNUP WITH</Text>
            <View style={styles.wrapSocial}>
              <Image source={require('App/Images/facebook.png')} style={[styles.social, styles.mr5]} />
              <Image source={require('App/Images/google-plus.png')} style={styles.social} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    );
  }
}

export default compose(
  reduxForm({
    form: 'sign-up',
    validate: validator({
      email: [['email']],
      password: [['required']],
      rights: [['required']]
    }),
    onSubmit: (values, dispatch) => console.log(values)
  })
)(SignInScreen);
