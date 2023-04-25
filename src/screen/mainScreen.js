import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AgileScreen from './AgileScreen';
import ChatScreen from './ChatScreen';
import TextScreen from './TextScreen';
import Bottom from "../components/bottom";


const Stack = createStackNavigator();


const MainScreen = ({ navigation }) => {
	const [showBottom, setShowBottom] = useState(true);
	useEffect(() => {
		const unsubscribe = navigation.addListener('state', () => {
			setShowBottom(true); // Show the Bottom component
		});

		return () => {
			unsubscribe();
		}
	}, [navigation]);
	const handleButtonClick = (screenName) => {
		// Navigate to AgileScreen component
		navigation.navigate(screenName);
	}
	
	
	
	
	return (
		
		<View style={{ flex: 1, flexDirection: "row"}}>
			<ImageBackground style={{ flex:1, flexDirection:"row", backgroundColor:"#222",opacity:0.8}}  resizeMode="contain" source={require('../images/BackgroundImage.png')}>
				
			<View style={styles.ViewLayout}>
				<TouchableOpacity onPress={() => handleButtonClick('AgileScreen')}
				style={styles.imageStyle}
				hitSlop={{ top: 15, right: 5, bottom: 62, left: 5 }}
				>
					<ImageBackground
						source={require('../images/AgileImage.png')}
						style={styles.imageStyle}
						>
					</ImageBackground>
				</TouchableOpacity>
				<Text style={styles.titleText}>Create Agile Image</Text>

			</View>
			<View style={styles.ViewLayout}>
				<TouchableOpacity onPress={() => handleButtonClick('ChatScreen')} 
				style={styles.imageStyle}
				hitSlop={{ top: 15, right: 5, bottom: 62, left: 5 }}
				
				>
					<ImageBackground
						source={require('../images/ChatImage.png')}
						style={styles.imageStyle}
						>
					</ImageBackground>
				</TouchableOpacity>
				<Text style={styles.titleText}>Create Chat Image</Text>
			</View>
			<View style={styles.ViewLayout}>
				<TouchableOpacity onPress={() => handleButtonClick('TextScreen')} 
				style={styles.imageStyle}
				hitSlop={{ top: 15, right: 5, bottom: 62, left: 5 }}
				>
					<ImageBackground
						source={require('../images/TextImage.png')}
						style={styles.imageStyle}
						>
					</ImageBackground>
					
				</TouchableOpacity>
				<Text style={styles.titleText}>Create Text Image</Text>

			</View>
			{showBottom && <Bottom />}			
							</ImageBackground>
		</View>
	);
};

export default () => {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }}>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
						<Stack.Screen name="AgileScreen" component={AgileScreen} />
						<Stack.Screen name="ChatScreen" component={ChatScreen} />
						<Stack.Screen name="TextScreen" component={TextScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}


const styles = StyleSheet.create({
	ViewLayout: {
		flex: 1,
		flexDirection: "column",
		justifyContent:"center",
		alignItems:"center",
		
	},
	titleText: {
		
		color:"white",
		fontSize: 40,
		fontWeight: "bold",
		
	},
	imageStyle: {
		width: 400,
		height: 350,
		overflow:"hidden",
		borderRadius:30,
		borderColor:"#222",
		opacity:1
		
		
	}
	
});
