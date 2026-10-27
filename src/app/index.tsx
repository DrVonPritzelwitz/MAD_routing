import { StyleSheet, Text, View } from "react-native";

export default function Index() {

	// A function die code gebruikt om naar een andere pagina te navigeren komt hier.


	return (
		<View style={styles.mc}>

			<Text style={styles.title}>Home</Text>
			
			{/* Een link om naar een andere pagina te navigeren komt hier */}
			
			{/* Een Button om naar een andere pagina te navigeren komt hier */}

		</View>
	);
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
})
