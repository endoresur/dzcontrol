import { cc } from "utils/combineClasses";
import styles from "./styles.module.scss";

interface Props {
  bcc: string;
  className?: string;
}

const Solution = ({ bcc, className }: Props) => {
  return (
    <section style={{ backgroundColor: bcc }}>
      <div className={cc(styles.solutionRoot, className)}>
        <h2>ДЗ-Контроль — ваш надежный помощник</h2>
        <h3>
          Мы берем на себя рутину и контроль, чтобы вы могли наслаждаться
          общением с ребенком
        </h3>

        <div className={styles.content}>
          <article className={styles.card}>
            <p className={styles.title}>Заявка </p>
            <p className={styles.description}>
              Вы оставляете заявку, и мы подбираем персонального куратора
            </p>
          </article>

          <article className={styles.card}>
            <p className={styles.title}>Знакомство </p>
            <p className={styles.description}>
              Бесплатный вводный звонок куратора с вами и ребенком
            </p>
          </article>

          <article className={styles.card}>
            <p className={styles.title}>Отчет </p>
            <p className={styles.description}>
              Вы получаете четкий отчет о том, что сделано и с каким результатом
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Solution;
