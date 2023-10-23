import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';

import Login from "../Screens/Login";
import Home from "../Screens/Home";

enableScreens(true);

const Stack = createStackNavigator();
const navigationRef = React.createRef();

const options = {
	headerBackTitleVisible: false,
	cardStyleInterpolator: ({ current: { progress } }) => {
		return {
			cardStyle: {
				opacity: progress,

			}
		};
	},

};

export function navigate(name, params) {
	navigationRef.current?.navigate(name, params);
}

export default function RootNavigator() {
	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator initialRouteName='Login'
				screenOptions={{
					headerShown: false
				}}>
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='Home' component={Home} />
				



				{/*  */}
				{/*  */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

