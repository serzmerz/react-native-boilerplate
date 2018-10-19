import { AsyncStorage } from 'react-native';
import { put, call } from 'redux-saga/effects';
import NavigationService from '../../Navigation/NavigationService';

export default function * () {
  const notFirstEntry = yield AsyncStorage.getItem('notFirstEntry');
  // yield put(NavigationActions.navigate({ routeName: 'SignInScreen' }))
  if (notFirstEntry) yield call(NavigationService.navigate, 'SignUpScreen');
  if (!notFirstEntry) yield call(NavigationService.navigate, 'OnBoardScreen');
  console.log('i;m a sagas');
}
