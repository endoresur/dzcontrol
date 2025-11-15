import { cc } from "utils/combineClasses";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
}

interface ITarif {
  price: number;
  description: string;
  items: string[];
}

const tarifs: ITarif[] = [
  {
    price: 5000,
    description: "Для уверенности, что все задания выполнены",
    items: [
      "Ежедневный вечерний контрольный звонок",
      "Проверка ДЗ по фото в чате",
      "Краткий еженедельный отчет в мессенджере",
    ],
  },
  {
    price: 10000,
    description: "Для тех, кто хочет не только контроля, но и результата",
    items: [
      "Всё из тарифа «Базовый»",
      "Персональный закрепленный куратор",
      "Помощь в планировании дня",
      "Утреннее напоминание собрать портфель",
      "Помощь в решении трудных задач (наводящие вопросы)",
      "Подробный отчет раз в неделю",
    ],
  },
  {
    price: 15000,
    description: "Для максимального спокойствия и развития ребенка",
    items: [
      "Всё из тарифа «Оптимальный»",
      "Связь с куратором в течение дня (будни до 21:00)",
      "Проверка на аккуратность и грамотность",
      "Итоговый отчет для родителей",
    ],
  },
];

const Tarifs = ({ className }: Props) => {
  return (
    <section className={cc(styles.tarifsRoot, className)}>
      {tarifs.map((tarif) => (
        <div>
          <h3>{tarif.price}</h3>
          <p>{tarif.description}</p>
          <div>
            {tarif.items.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Tarifs;
