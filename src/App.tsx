import React from "react";
import TaskList from "./features/task/taskList/TaskList";
import TaskForm from "./features/task/taskForm/TaskForm";
import Header from "./components/header/Header";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Header />
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
