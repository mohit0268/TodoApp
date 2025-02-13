### TODO app

## Overview

- TodoApp is a simple and efficient task management application built using React Native. It helps users organize their daily tasks by adding, viewing, and managing their to-do items in an intuitive way. The app leverages key React Native components to provide a smooth and interactive user experience.

## Features

- Add new tasks
- View tasks in a structured list
- Mark tasks as completed
- Delete tasks
- Interactive UI with modal pop-ups

## Technologies Used

* React Native: For building the mobile application
* JavaScript/JSX: For structuring the UI and logic
* React Hooks: For managing state and effects

## Key React Native Components Used

1. View

- The View component is the fundamental building block for layout in React Native. It is used to wrap and structure UI elements in a flexible way, similar to div in HTML.

<View style={styles.container}>
  <Text>Welcome to TodoApp</Text>
</View>

2. Button

- The Button component provides a simple way to trigger actions, such as adding a new to-do item.

<Button title="Add Task" onPress={handleAddTask} />

3. StatusBar

- The StatusBar component is used to control the appearance of the status bar at the top of the screen, ensuring a seamless UI.

<StatusBar barStyle="dark-content" backgroundColor="#fff" />

4. FlatList

- The FlatList component is used to efficiently render a large list of tasks. It supports lazy loading and optimized rendering.

<FlatList
data={tasks}
renderItem={({ item }) => <Text>{item.text}</Text>}
keyExtractor={(item, index) => index.toString()}
/>

5. Modal

- The Modal component is used to display pop-ups, such as a form for adding new tasks.

<Modal visible={isModalVisible} animationType="slide">
  <View>
    <Text>Enter your task</Text>
    <Button title="Close" onPress={() => setModalVisible(false)} />
  </View>
</Modal>


- This project serves as an introduction to React Native and its core components. By building TodoApp, I have explored UI structuring, state management, and component-based development in React Native.
