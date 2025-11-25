import { cc } from "utils/combineClasses";
import styles from "./styles.module.scss";
import { icons } from "constants/icons";

interface Props {
  bcc: string;
  className?: string;
}

const Footer = ({ bcc, className }: Props) => {
  return (
    <footer style={{ backgroundColor: bcc }}>
      <div className={cc(styles.footerRoot, className)}>
        <div className={styles.logo}>
          <div className={styles.logoWrapper}>
            <img src={icons.logo} />
          </div>
          <p className={styles.slogan}>
            {` Свобода для вас, \nответственность для ребенка, \nуверенность для всех!`}
          </p>
        </div>
        <div className={styles.contacts}>
          <p className={styles.contactsTitle}>Контакты: </p>
          <p className={styles.contact}>email@email.com</p>
          <p className={styles.contact}>WhatsApp</p>
          <p className={styles.contact}>Telegram</p>
          <p className={styles.contact}>VK</p>
        </div>
        <p className={styles.copyrights}>
          © «ДЗ-Контроль», {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
