import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

function GoalInput(props) {
  const [inputText, setInputText] = useState("");

  function textChangeHandler(enteredText) {
    setInputText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(inputText);
    setInputText("");
  }
  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search for the item"
          style={styles.textInputContainer}
          onChangeText={textChangeHandler}
          value={inputText}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              accessibilityLabel="Learn more about by clicking it"
              onPress={addGoalHandler}
            />
          </View>
          <View  style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    padding: 20,
  },
  textInputContainer: {
    borderWidth: 1,
    borderBlockColor: "black",
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 10,
  },
  button: {
    width: "30%",
    marginHorizontal: 10,
  },
});

export default GoalInput;
