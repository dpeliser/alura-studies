import Button from '../button';
import Watch from './watch';
import style from './Cronometer.module.scss';
import { timeToSeconds } from '../../common/utils/time';
import { ITask } from '../../types/task';
import { useEffect, useState } from 'react';

interface Props {
  selected: ITask | undefined
  finishTask: () => void
};

export default function Cronometer({ selected, finishTask }: Props) {

  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time))
    }
  }, [selected]);

  function regressive(count: number = 0) {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1);
        return regressive(count -1);
      }
      finishTask();
    }, 1000);
  };

  return (
    <div className={style.cronometer}>
      <p className={style.title}>Choose a card and start the cronometer</p>
      <div className={style.watchWrapper}>
        <Watch time={time}></Watch>
      </div>
      <Button onClick={() => regressive(time)}>Start</Button>
    </div>
  );

}