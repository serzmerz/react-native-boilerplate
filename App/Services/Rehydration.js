import ReduxPersist from '../Config/ReduxPersist';
import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';
import {envStartupAction} from 'App/Domain/env';

const updateReducers = (store: Object) => {
  const reducerVersion = ReduxPersist.reducerVersion;
  const startup = () => store.dispatch(envStartupAction());

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion').then((localVersion) => {
    if (localVersion !== reducerVersion) {
      // eslint-disable-next-line no-console
      console.log({
        name: 'PURGE',
        value: {
          'Old Version:': localVersion,
          'New Version:': reducerVersion
        },
        preview: 'Reducer Version Change Detected',
      });
      // Purge store
      persistStore(store, null, startup).purge();
      AsyncStorage.setItem('reducerVersion', reducerVersion);
    } else {
      persistStore(store, null, startup);
    }
  }).catch(() => {
    persistStore(store, null, startup);
    AsyncStorage.setItem('reducerVersion', reducerVersion);
  });
};

export default { updateReducers };
