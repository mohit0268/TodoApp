import { useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  Text,
  TextInput,
  FlatList
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from './components/GoalInput'


export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);

  

  function addGoalHandler(inputText) {
    setCourseGoals((prev) => [...prev, {
      text:inputText,
      key:Math.random().toString()
    }]);
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemList) => {
            return (
              <GoalItem Text={itemList.item.text}/>
            );
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  goalContainer: {
    flex: 5,
    borderTopWidth: 1,
    borderTopColor: "#cccccc",
  }
  
});
