import { useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from './components/GoalInput'
import { StatusBar } from "expo-status-bar";


export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible,setModalVisible] = useState(false);
  
  function startAddGoalHandler(){
    setModalVisible(true)
  };

  function endGoalHandler(){
    
    setModalVisible(false)

  };

  function addGoalHandler(inputText) {
    setCourseGoals((prev) => [...prev, {
      text:inputText,
      id:Math.random().toString()
    }]);
    endGoalHandler();
  }

  

  function deleteGoalHandler(id){
    alert("Item Removed!")
    setCourseGoals(prev => {
      return prev.filter((goal)=>goal.id !== id);
    })
  }
  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' onPress={startAddGoalHandler}/>
      <GoalInput visible ={modalVisible} onAddGoal={addGoalHandler} onCancel ={endGoalHandler}/>
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemList) => {
            return (
              <GoalItem Text={itemList.item.text}
              id={itemList.item.id}
              onDeleteGoal={deleteGoalHandler}/>
            );
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    height:'auto',
    paddingTop: 50,
    paddingHorizontal: 15,
    
  },
  goalContainer: {
    flex: 5,
    borderTopWidth: 1,
    borderTopColor: "#cccccc",
  }
  
});
