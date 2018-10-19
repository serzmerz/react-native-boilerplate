import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Navigator from 'App/Navigation';
import createStore from 'App/Domain';
import {StatusBar, View} from 'react-native';

// create our store
export const store = createStore();

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex : 1 }}>
          <StatusBar barStyle='light-content' />
          <Navigator />
        </View>
      </Provider>
    );
  }
}

// allow reactotron overlay for fast design in dev mode
export default App;
