import { skipOnBoardingAction } from 'App/Domain/env';
import { AsyncStorage } from 'react-native';
import { put, takeLatest } from 'redux-saga/effects';
import NavigationService from '../../Navigation/NavigationService';

function * watchSkipOnBoard () {
  yield AsyncStorage.setItem('notFirstEntry', 'true');
  yield put(NavigationService.navigate('SignInScreen'));
}

export default function * () {
  yield takeLatest(skipOnBoardingAction.type, watchSkipOnBoard);
}
