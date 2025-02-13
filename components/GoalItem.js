import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#cccccc" }}
        onPress={props.onDeleteGoal.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.Text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginTop:20,
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#2b3",
    borderRadius: 3,
  },
  goalText: {
    color: "white",
    padding: 10,
  },
});

export default GoalItem;
