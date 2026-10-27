import { Link, router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {

	const gotoProjects = () => {
		router.navigate('/projects');
	}


	return (
		<View style={styles.mc}>

			<Text style={styles.title}>Home</Text>


			<Link href={'/contact'} style={styles.link}>Contact</Link>

			<Button title="Projects" onPress={gotoProjects}></Button>

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
});
