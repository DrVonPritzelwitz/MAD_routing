import { StyleSheet, Text, View } from 'react-native';

export default function contact() {
  return (
	<View style={styles.mc}>
	  <Text style={styles.title}>Contact</Text>
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
	}
});