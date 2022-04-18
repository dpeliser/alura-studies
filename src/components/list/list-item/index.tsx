import { ITask } from "../../../types/task";
import style from "./ListItem.module.scss";

interface Props extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

export default function ListItem({
  task,
  time,
  selected,
  completed,
  id,
  selectTask,
}: Props) {

  return (
    <li
      className={`${style.item} ${selected ? style.selectedItem : ''} ${completed ? style.finishedItem : ''}`}
      onClick={() => !completed && selectTask({ task, time, selected, completed, id })}
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && <span className={style.finished} aria-label="Task finished"></span>}
    </li>
  );

}
