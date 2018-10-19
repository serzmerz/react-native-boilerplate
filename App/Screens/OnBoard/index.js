import RoundedButton from 'App/Components/RoundedButton';
import TransparentButton from 'App/Components/TransparentButton';
import injectSaga from 'App/Lib/injects/injectSaga';
import { skipOnBoardingAction } from 'App/Domain/env';
import React, { PureComponent } from 'react';
import { Image, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';
import styles from './styles';
import saga from './saga';

class OnBoardScreen extends PureComponent {
  static propTypes = {
    skipOnBoard: PropTypes.func.isRequired
  };

  static navigationOptions = {
    header: null
  };

  renderDotIndicator = () => (
    <PagerDotIndicator pageCount={3} selectedDotStyle={styles.selectedDotStyle} dotStyle={styles.dotStyle} />
  );

  nextSlide = (index) => () => this.viewPager.setPage(index);

  render () {
    const { skipOnBoard } = this.props;

    return (
      <IndicatorViewPager
        ref={el => { this.viewPager = el; }}
        style={styles.viewPager}
        indicator={this.renderDotIndicator()}
      >
        <View style={styles.page}>
          <TransparentButton containerStyles={styles.skip} onPress={skipOnBoard}>skip</TransparentButton>
          <Image source={require('./Images/step-1.png')} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.text}>Easy add all your discount cards into application</Text>
            <RoundedButton containerStyles={styles.button} onPress={this.nextSlide(1)}>next</RoundedButton>
          </View>
        </View>
        <View style={styles.page}>
          <TransparentButton containerStyles={styles.skip} onPress={skipOnBoard}>skip</TransparentButton>
          <Image source={require('./Images/step-2.png')} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.text}>Open app ones you need to use any discount card and find needed card</Text>
            <RoundedButton containerStyles={styles.button} onPress={this.nextSlide(2)}>next</RoundedButton>
          </View>
        </View>
        <View style={styles.page}>
          <Image source={require('./Images/step-3.png')} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.text}>Use your card in app instead of having all of them in you pocket!</Text>
            <RoundedButton containerStyles={styles.button} onPress={skipOnBoard}>next</RoundedButton>
          </View>
        </View>
      </IndicatorViewPager>
    );
  }
}

export default compose(
  connect(null, {
    skipOnBoard: skipOnBoardingAction,
  }),
  injectSaga({ key: 'on-board', saga })
)(OnBoardScreen);
