import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Project() {
	const { pid } = useLocalSearchParams();

  return (
	<View style={styles.mc}>
	  <Text style={styles.title}>Project { pid }</Text>
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