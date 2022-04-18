import style from "./List.module.scss";
import ListItem from "./list-item";
import { ITask, ITasks } from "../../types/task";

interface Props {
  tasks: ITasks;
  selectTask: (selectedTask: ITask) => void
}

export default function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.taskList}>
      <h2>Studies of the day</h2>
      <ul>
        {tasks.map(item => (
          <ListItem key={item.id} selectTask={selectTask} {...item} />
        ))}
      </ul>
    </aside>
  );
}
