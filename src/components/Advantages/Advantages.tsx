import { cc } from "utils/combineClasses";
import styles from "./styles.module.scss";
import { TextBlock } from "model/models";

interface Props {
  className?: string;
}

const arr: TextBlock[] = [
  {
    title: "Не репетитор, а менеджер учебы",
    description:
      "Мы учим ребенка самостоятельности и ответственности, а не делаем задание за него",
  },
  {
    title: "Прозрачность и отчетность",
    description:
      "Вы всегда в курсе успехов ребенка. Регулярные отчеты в удобном для вас формате",
  },
  {
    title: "Гарантия конфиденциальности",
    description: "Все данные вашей семьи и ребенка защищены",
  },
  {
    title: "Свободные вечера и крепкие нервы",
    description: "Главный результат — спокойная атмосфера в доме",
  },
];

const Advantages = ({ className }: Props) => {
  return (
    <section className={cc(styles.advantagesRoot, className)}>
      <h2>Почему родители выбирают ДЗ-Контроль?</h2>
      {arr.map((item) => (
        <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Advantages;
