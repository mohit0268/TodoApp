import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Text>Getting started....</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
