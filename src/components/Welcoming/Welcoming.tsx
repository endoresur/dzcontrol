import { cc } from "utils/combineClasses";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
}

const Welcoming = ({ className }: Props) => {
  return (
    <section className={cc(styles.welcomingRoot, className)}>
      <h1>Вечер без ссор из-за уроков</h1>
      <h2>Начните жить спокойно</h2>
      <p>
        Персональный контроль выполнения домашнего задания для вашего ребенка.
        Вернем в вашу семью время и гармонию
      </p>
    </section>
  );
};

export default Welcoming;
