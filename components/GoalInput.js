import {useState} from 'react'
import { View, TextInput, Button, StyleSheet } from "react-native";

function GoalInput(props) {
    const [inputText, setInputText] = useState("");

    function textChangeHandler(enteredText) {
        setInputText(enteredText);
      }

    function addGoalHandler(){
        props.onAddGoal(inputText);
        setInputText('');
    }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Search for the item"
        style={styles.textInputContainer}
        onChangeText={textChangeHandler}
        value={inputText}
      ></TextInput>
      <Button
        title="Click"
        accessibilityLabel="Learn more about by clicking it"
        onPress={addGoalHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
  },
  buttonContainer: {},
});

export default GoalInput;
