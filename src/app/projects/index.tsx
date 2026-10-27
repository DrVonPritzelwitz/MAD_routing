import { StyleSheet, Text, View } from 'react-native';

export default function index() {
	return (
		<View style={styles.mc}>
			<Text style={styles.title}>Projects</Text>

		{/* 
			Hier komen linkjes naar verschillende projecten, ze verwijzen allemaal naar één pagina.
	  		Dynamic routing maakt dit mogelijk.
		*/}

		</View>
	)
}

const styles = StyleSheet.create({
	mc: {
		flex: 1,
		alignItems: "center",
	},
	title: {
		fontSize: 28,
		fontWeight: 'black',
		marginVertical: 30
	},
	link: {
		fontSize: 18,
		fontWeight: '300',
		color: 'blue',
		marginVertical: 20
	}
});