import { cc } from "utils/combineClasses";
import styles from "./styles.module.scss";

interface Props {
  id: string;
  bcc: string;
  className?: string;
}

interface ITarif {
  title: string;
  price: number;
  description: string;
  items: string[];
}

const tarifs: ITarif[] = [
  {
    title: "Базовый",
    price: 5000,
    description: "Для уверенности, что все задания выполнены",
    items: [
      "Ежедневный вечерний контрольный звонок",
      "Проверка ДЗ по фото в чате",
      "Краткий еженедельный отчет в мессенджере",
    ],
  },
  {
    title: "Оптимальный",
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
    title: "Премум",
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

const Tarifs = ({ id, bcc, className }: Props) => {
  return (
    <section style={{ backgroundColor: bcc, scrollMargin: 50 }} id={id}>
      <div className={cc(styles.tarifsRoot, className)}>
        <h2>Выберите подходящий пакет контроля</h2>
        <div className={styles.content}>
          {tarifs.map((tarif) => (
            <article className={styles.cardWrapper}>
              <h3 className={styles.title}>{tarif.title}</h3>
              <div className={styles.card}>
                <p className={styles.price}>{tarif.price}р</p>
                <p className={styles.period}>в месяц</p>
                <p className={styles.description}>{tarif.description}</p>
                <div className={styles.list}>
                  {tarif.items.map((item) => (
                    <p className={styles.listItem}>✔️ {item}</p>
                  ))}
                </div>
              </div>
              <button className={styles.button}>Выбрать тариф</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tarifs;
