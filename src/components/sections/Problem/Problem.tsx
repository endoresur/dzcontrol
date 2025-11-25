import { cc } from "utils/combineClasses";
import styles from "./styles.module.scss";
import { TextBlockImaged } from "model/models";

interface Props {
  bcc: string;
  className?: string;
}

const problems: TextBlockImaged[] = [
  {
    imageSrc: "public\\problem1.jpg",
    title: "Не хочу и не буду!",
    description: "Ежедневные битвы за начало выполнения уроков",
  },
  {
    imageSrc: "public\\problem2.jpg",
    title: "Мама, я не понимаю!",
    description: "А вы сами уже забыли школьную программу",
  },
  {
    imageSrc: "public\\problem3.jpg",
    title: "Уже поздно, а уроки не сделаны",
    description: "Вечер испорчен, нервы на пределе",
  },
  {
    imageSrc: "public\\problem4.jpg",
    title: "Сделал, но на двойку",
    description: "Отсутствие системы и самопроверки",
  },
];

const Problem = ({ bcc, className }: Props) => {
  return (
    <section style={{ backgroundColor: bcc }}>
      <div className={cc(styles.problemRoot, className)}>
        <h2>Знакомо ли вам это?</h2>

        <div className={styles.content}>
          {problems.map((item) => (
            <article className={styles.card}>
              <div className={styles.infoWrapper}>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.description}>{item.description}</p>
              </div>
              <div className={styles.imageWrapper}>
                <img
                  src={item.imageSrc}
                  className={styles.image}
                  alt={`${item.title}: ${item.description}`}
                />
              </div>
            </article>
          ))}
        </div>

        <p className={styles.solve}>
          Вы не одни! С этой проблемой сталкивается 8 из 10 семей. Но выход есть
        </p>
      </div>
    </section>
  );
};

export default Problem;
