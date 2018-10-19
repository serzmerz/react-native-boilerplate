import {syncAction, asyncAction} from 'App/Lib/actions';

export const envStartupAction = syncAction('ENV/STARTUP');

export const signUpAction = asyncAction('ENV/SIGN_UP');
export const signInAction = asyncAction('ENV/SIGN_IN');
export const logOutAction = syncAction('ENV/SIGN_IN');

export const skipOnBoardingAction = syncAction('ENV/SKIP_ON_BOARD');