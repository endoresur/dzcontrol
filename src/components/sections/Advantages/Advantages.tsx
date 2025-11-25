import { cc } from "utils/combineClasses";
import styles from "./styles.module.scss";
import { TextBlockImaged } from "model/models";

interface Props {
  bcc: string;
  className?: string;
}

const arr: TextBlockImaged[] = [
  {
    imageSrc: "public\\advanteges1.png",
    title: "Не репетитор, а менеджер учебы",
    description:
      "Мы учим ребенка самостоятельности и ответственности, а не делаем задание за него",
  },
  {
    imageSrc: "public\\advanteges2.png",
    title: "Прозрачность и отчетность",
    description:
      "Вы всегда в курсе успехов ребенка. Регулярные отчеты в удобном для вас формате",
  },
  {
    imageSrc: "public\\advanteges3.png",
    title: "Гарантия конфиденциальности",
    description: "Все данные вашей семьи и ребенка защищены",
  },
  {
    imageSrc: "public\\advanteges4.png",
    title: "Свободные вечера и крепкие нервы",
    description: "Главный результат — спокойная атмосфера в доме",
  },
];

const Advantages = ({ bcc, className }: Props) => {
  return (
    <section style={{ backgroundColor: bcc }}>
      <div className={cc(styles.advantagesRoot, className)}>
        <h2>Почему родители выбирают ДЗ-Контроль?</h2>
        <div className={styles.content}>
          {arr.map((item) => (
            <article className={styles.card}>
              <img src={item.imageSrc} className={styles.icon} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
