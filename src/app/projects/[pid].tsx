import { StyleSheet, Text, View } from 'react-native';

export default function Project() {
// hier komt een 'hook' waarmee we de data uit de URL kunnen halen.

  return (
	<View style={styles.mc}>
	  <Text style={styles.title}>Project ?</Text>
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