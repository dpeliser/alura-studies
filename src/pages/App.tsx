import React, { useState } from "react";
import Form from '../components/form';
import List from '../components/list';
import style from './App.module.scss';
import Cronometer from "../components/cronometer";
import { ITask, ITasks } from "../types/task";

export default function App() {

  const [tasks, setTasks] = useState<ITasks | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: selectedTask?.id === task.id
    })));
  };

  function finishTask() {
    if (selected) {
      setSelected(undefined);
      setTasks(oldTasks => oldTasks.map(task => {
        if (task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          };
        }
        return task;
      }));
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}></Form>
      <List tasks={tasks} selectTask={selectTask}></List>
      <Cronometer selected={selected} finishTask={finishTask}></Cronometer>
    </div>
  );

}
