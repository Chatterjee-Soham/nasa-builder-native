/** @format */

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";

import Details from "../screens/Details";
import Home from "../screens/Home";

const AppStack: FC = () => {
	const Stack = createNativeStackNavigator();
	const options = {
		headerShown: false,
	  };

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Details" options={options} component={Details} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppStack;
