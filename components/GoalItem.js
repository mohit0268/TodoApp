import {View,Text,StyleSheet} from 'react-native'

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.Text}</Text>
    </View>
  );
}

const styles= StyleSheet.create({
    goalItem: {
        margin: 10,
        justifyContent: "center",
        padding: 10,
        width: "90%",
        backgroundColor: "#4635B1",
        color: "#cccccc",
        borderRadius: 10,
      },
      goalText: {
        color: "white",
      },
})

export default GoalItem;
