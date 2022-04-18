import style from './Watch.module.scss';

interface Props {
  time: number | undefined;
};

export default function Watch({ time = 0 }: Props) {

  const [dozenMinutes, unitMinutes] = String(Math.floor(time / 60)).padStart(2, "0");
  const [dozenSeconds, unitSeconds] = String(time % 60).padStart(2, "0");

  return (
    <>
      <span className={style.relogioNumero}>{dozenMinutes}</span>
      <span className={style.relogioNumero}>{unitMinutes}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{dozenSeconds}</span>
      <span className={style.relogioNumero}>{unitSeconds}</span>
    </>
  );

}