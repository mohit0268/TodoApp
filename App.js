import { useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  Text,
  TextInput,
  FlatList
} from "react-native";


export default function App() {
  const [inputText, setInputText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function textChangeHandler(enteredText) {
    setInputText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((prev) => [...prev, {
      text:inputText,
      key:Math.random().toString()
    }]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search for the item"
          style={styles.textInputContainer}
          onChangeText={textChangeHandler}
        ></TextInput>
        <Button
          title="Click"
          accessibilityLabel="Learn more about by clicking it"
          onPress={addGoalHandler}
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
  inputContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  textInputContainer: {
    borderWidth: 1,
    borderBlockColor: "black",
    width: "80%",
  }
});
