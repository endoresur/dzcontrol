import { cc } from "utils/combineClasses";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
}

const Solution = ({ className }: Props) => {
  return (
    <section className={cc(styles.solutionRoot, className)}>
      <h2>ДЗ-Контроль — ваш надежный помощник</h2>
      <h3>
        Мы берем на себя рутину и контроль, чтобы вы могли наслаждаться общением
        с ребенком
      </h3>

      <ol>
        <li>
          Заявка: Вы оставляете заявку, и мы подбираем персонального куратора
        </li>
        <li>
          Знакомство: Бесплатный вводный звонок куратора с вами и ребенком
        </li>
        <li>
          Работа: Куратор связывается с ребенком, контролирует процесс
          выполнения ДЗ, помогает с организацией
        </li>
        <li>
          Отчет: Вы получаете четкий отчет о том, что сделано и с каким
          результатом
        </li>
      </ol>
    </section>
  );
};

export default Solution;
