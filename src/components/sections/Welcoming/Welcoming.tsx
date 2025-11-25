import { cc } from "utils/combineClasses";
import styles from "./styles.module.scss";

interface Props {
  bcc: string;
  className?: string;
}

const Welcoming = ({ bcc, className }: Props) => {
  return (
    <section style={{ backgroundColor: bcc }}>
      <div className={cc(styles.welcomingRoot, className)}>
        <h1>Вечер без ссор из-за уроков</h1>
        <h2>Начните жить спокойно</h2>
        <p>
          Персональный контроль выполнения домашнего задания для вашего ребенка.
          Вернем в вашу семью время и гармонию
        </p>
      </div>
    </section>
  );
};

export default Welcoming;
