import { createSwitchNavigator } from 'react-navigation';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

export default createSwitchNavigator(
	{ AuthStack, AppStack, AuthLoadingScreen },
	{ initialRouteName: 'AuthLoadingScreen' }
);
