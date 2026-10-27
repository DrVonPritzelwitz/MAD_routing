import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function index() {
	return (
		<View style={styles.mc}>
			<Text style={styles.title}>Projects</Text>

			<Link href={'/projects/1'} style={styles.link}>Project 1</Link>
			<Link href={'/projects/2'} style={styles.link}>Project 2</Link>
			<Link href={'/projects/3'} style={styles.link}>Project 3</Link>

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