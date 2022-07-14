/** @format */

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	input: {
		width: "80%",
		padding: 10,
		borderColor: "grey",
		borderWidth: 1,
		borderRadius: 10,
		marginBottom: 10,
	},
	buttonsRow: {
		marginTop:30,
		
		// flexDirection: "column",
		// justifyContent: "center",
		// alignItems: "center",
	},
	head:{
		color: "blue", 
		fontSize:20,
		display:"flex",
		justifyContent:"center",
		alignItems:"flex-start",
		height:"20%"

	},
});
