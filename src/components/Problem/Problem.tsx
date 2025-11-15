import { cc } from "utils/combineClasses";
import styles from "./styles.module.scss";
import { TextBlock } from "model/models";

interface Props {
  className?: string;
}

const problems: TextBlock[] = [
  {
    title: "Не хочу и не буду!",
    description: "Ежедневные битвы за начало выполнения уроков",
  },
  {
    title: "Мама, я не понимаю!",
    description: "А вы сами уже забыли школьную программу",
  },
  {
    title: "Уже поздно, а уроки не сделаны",
    description: "Вечер испорчен, нервы на пределе",
  },
  {
    title: "Сделал, но на двойку",
    description: "Отсутствие системы и самопроверки",
  },
];

const Problem = ({ className }: Props) => {
  return (
    <section className={cc(styles.problemRoot, className)}>
      <h2>Знакомо ли вам это?</h2>

      <div>
        {problems.map((item) => (
          <div style={{ display: "flex" }}>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div>
        Вы не одни. С этой проблемой сталкивается 8 из 10 семей. Но выход есть
      </div>
    </section>
  );
};

export default Problem;
