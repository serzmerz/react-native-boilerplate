import I from 'immutable';

const initialState = I.fromJS({
  token: null,
  identity: {},
  isAuthorized: false,
});

export const reducer = {
  env(state = initialState, { type, payload }) {
    switch (type) {
    default:
      return state;
    }
  },
};