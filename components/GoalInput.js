import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

function GoalInput(props) {
  const [inputText, setInputText] = useState("");

  function textChangeHandler(enteredText) {
    setInputText(enteredText);
  }

  function addGoalHandler() {
    if(inputText !== ""){
    props.onAddGoal(inputText);
    setInputText("");
    }
    else{
    alert("Field should not be empty.")
    }
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/bird.png')} style={styles.image}/>
        <TextInput
          placeholder="Add Todo..."
          style={styles.textInputContainer}
          onChangeText={textChangeHandler}
          value={inputText}
          placeholderTextColor={"white"}
        ></TextInput>
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color={"#910A67"} />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              accessibilityLabel="Learn more about by clicking it"
              onPress={addGoalHandler}
            />
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
    backgroundColor:"#021526"
  },
  textInputContainer: {
    borderWidth: 1,
    borderColor:'white',
    width: "100%",
    color:'white',
    padding:10,
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 10,
  },
  button: {
    width: "30%",
    marginHorizontal: 10,
  },
  image:{
    width:150,
    height:100,
    borderRadius:100,
    marginBottom:10,
    
  }
});

export default GoalInput;
